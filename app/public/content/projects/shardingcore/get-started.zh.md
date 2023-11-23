## 快速开始

5步实现按月分表,且支持自动化建表建库

### 第一步安装依赖

选择您的efcore的数据库驱动版本

```c#
# 请对应安装您需要的版本
PM> Install-Package ShardingCore
# use sqlserver
PM> Install-Package Microsoft.EntityFrameworkCore.SqlServer
#  use mysql
#PM> Install-Package Pomelo.EntityFrameworkCore.MySql
# use other database driver,if efcore support
```



### 第二步创建查询对象

查询对象

```c#
    /// <summary>
    /// order table
    /// </summary>
    public class Order
    {
        /// <summary>
        /// order Id
        /// </summary>
        public string Id { get; set; }
        /// <summary>
        /// payer id
        /// </summary>
        public string Payer { get; set; }
        /// <summary>
        /// pay money cent
        /// </summary>
        public long Money { get; set; }
        /// <summary>
        /// area
        /// </summary>
        public string Area { get; set; }
        /// <summary>
        /// order status
        /// </summary>
        public OrderStatusEnum OrderStatus { get; set; }
        /// <summary>
        /// CreationTime
        /// </summary>
        public DateTime CreationTime { get; set; }
    }
    public enum OrderStatusEnum
    {
        NoPay=1,
        Paying=2,
        Payed=3,
        PayFail=4
    }
```



### 第三步创建dbcontext

dbcontext `AbstractShardingDbContext`和`IShardingTableDbContext`如果你是普通的DbContext那么就继承`AbstractShardingDbContext`需要分表就实现`IShardingTableDbContext`,如果只有分库可以不实现`IShardingTableDbContext`接口

```c#
    public class MyDbContext:AbstractShardingDbContext,IShardingTableDbContext
    {
        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Order>(entity =>
            {
                entity.HasKey(o => o.Id);
                entity.Property(o => o.Id).IsRequired().IsUnicode(false).HasMaxLength(50);
                entity.Property(o=>o.Payer).IsRequired().IsUnicode(false).HasMaxLength(50);
                entity.Property(o => o.Area).IsRequired().IsUnicode(false).HasMaxLength(50);
                entity.Property(o => o.OrderStatus).HasConversion<int>();
                entity.ToTable(nameof(Order));
            });
        }
        /// <summary>
        /// empty impl if use sharding table
        /// </summary>
        public IRouteTail RouteTail { get; set; }
    }
```



### 第四步添加分表路由

```c#
路由构造函数支持依赖注入,依赖注入的对象生命周期必须是单例
    public class OrderVirtualTableRoute:AbstractSimpleShardingMonthKeyDateTimeVirtualTableRoute<Order>
    {
        /// <summary>
        /// fixed value don't use DateTime.Now because if  if application restart this value where change
        /// </summary>
        /// <returns></returns>
        public override DateTime GetBeginTime()
        {
            return new DateTime(2021, 1, 1);
        }
        /// <summary>
        /// configure sharding property
        /// </summary>
        /// <param name="builder"></param>

        public override void Configure(EntityMetadataTableBuilder<Order> builder)
        {
            builder.ShardingProperty(o => o.CreationTime);
        }
        /// <summary>
        /// enable auto create table job
        /// </summary>
        /// <returns></returns>

        public override bool AutoCreateTableByTime()
        {
            return true;
        }
    }
```



### 第五步配置启动项

无论你是何种数据库只需要修改`AddDefaultDataSource`里面的链接字符串 请不要修改委托内部的UseXXX参数 `conStr` and `connection`

```c#
        public void ConfigureServices(IServiceCollection services)
        {

            //额外添加分片配置
            services.AddShardingDbContext<MyDbContext>()
                .UseRouteConfig(op =>
                {
                    op.AddShardingTableRoute<OrderVirtualTableRoute>();
                }).UseConfig(op =>
                {
                    op.UseShardingQuery((connStr, builder) =>
                    {
                        //connStr is delegate input param
                        builder.UseSqlServer(connStr);
                    });
                    op.UseShardingTransaction((connection, builder) =>
                    {
                        //connection is delegate input param
                        builder.UseSqlServer(connection);
                    });
                    //use your data base connection string
                    op.AddDefaultDataSource(Guid.NewGuid().ToString("n"),
                        "Data Source=localhost;Initial Catalog=EFCoreShardingTableDB;Integrated Security=True;");
                }).AddShardingCore();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            //not required, enable check table missing and auto create,非必须  启动检查缺少的表并且创建
            app.ApplicationServices.UseAutoTryCompensateTable();
            // other configure....
        }
```



这样所有的配置就完成了你可以愉快地对Order表进行按月分表了

```c#
[Route("api/[controller]")]
public class ValuesController : Controller
{
        private readonly MyDbContext _myDbContext;

        public ValuesController(MyDbContext myDbContext)
        {
            _myDbContext = myDbContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var order = await _myDbContext.Set<Order>().FirstOrDefaultAsync(o => o.Id == "2");
            return OK(order)
        }
}
```
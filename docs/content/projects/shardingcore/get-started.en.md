## Quick start

Five steps implement sharding by month and support auto create table by month

### Step 1: Install the package

Choose Database driver for EntityFramework Core

```shell
# basic package
PM> Install-Package ShardingCore
# sqlserver driver
PM> Install-Package Microsoft.EntityFrameworkCore.SqlServer
# mysql driver
#PM> Install-Package Pomelo.EntityFrameworkCore.MySql
# use other database driver,if efcore support
```



### Step 2: Query entity

Query entity order

```C#
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



### Step 3: Create DbContext

Create `MyDbContext` extends `AbstractShardingDbContext`, then this DbContext support sharding database.

If you want support sharding table(spilt table eg. `order_202101`,`order_202102`,`order_202103`......), you need implements `IShardingTableDbContext`

```C#
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
                //really table name is Order_202101,Order_202102,Order_202103.....
                entity.ToTable(nameof(Order));
            });
        }
        /// <summary>
        /// empty implment if use sharding table
        /// </summary>
        public IRouteTail RouteTail { get; set; }
    }
```



### Step 4:Create route that data(Order) query mapping table name

```C#
//Route constructor support dependency injection,that's life time scope is `Singleton`

    public class OrderVirtualTableRoute:AbstractSimpleShardingMonthKeyDateTimeVirtualTableRoute<Order>
    {
        //private readonly IServiceProvider _serviceProvider;

        //public OrderVirtualTableRoute(IServiceProvider serviceProvider)
        //{
            //_serviceProvider = serviceProvider;
        //}
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



### Step 5: Start up Configure

You need modify `AddDefaultDataSource` method second param(connection string), don't modify `UseShardingQuery`、`UseShardingTransaction` delegate params

```C#
        public void ConfigureServices(IServiceCollection services)
        {

            //sharding config
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



Then, EntityFramework Core support sharding table，like sharding-jdbc in java, you can 'happy-coding' with EntityFramework Core:

```C#
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
            
            //_myDbContext.Add(order);
            //_myDbContext.Udpate(order);
            //_myDbContext.Remove(order);
            //_myDbContext.SaveChanges();
            var order = await _myDbContext.Set<Order>().FirstOrDefaultAsync(o => o.Id == "2");
            return OK(order)
        }
}
```
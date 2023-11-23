**Note that the documentation may lag behind the code, and there may be minor differences. You can refer to the Sample project in the source code to learn how to use it together. The nuget package used may not be the official one.**

1. The Console project for .NET Core.
2. Add the DotnetSpider library.

- Visual Studio

  ```
    + Right-click on the solution and launch Manage NuGet Packages
    + Search for DotnetSpider and select DotnetSpider from the results list
    + Install it to the project
  ```



- Package Manager

  ```
  Install-Package DotnetSpider -Version 5.0.8
  ```



- Command line

  ```
  dotnet add package DotnetSpider --version 5.0.8
  ```



1. Add Serilog

   ```
    <PackageReference Include="Serilog.AspNetCore" Version="3.4.0" />
    <PackageReference Include="Serilog.Sinks.Console" Version="3.1.1" />
    <PackageReference Include="Serilog.Sinks.RollingFile" Version="3.3.0" />
    <PackageReference Include="Serilog.Sinks.PeriodicBatching" Version="2.3.0" />
   ```



2. Create `GithubSpider` class

   ```
    public class GithubSpider : Spider
    {
    	public GithubSpider(IOptions<SpiderOptions> options, DependenceServices services, ILogger<Spider> logger) :
    		base(options, services, logger)
    	{
    	}
   
    	protected override async Task InitializeAsync(CancellationToken stoppingToken)
    	{
    		// Add custom parsing
    		AddDataFlow(new Parser());
    		// To use console stoarage
    		AddDataFlow(new ConsoleStorage());
    		// Adding a Capture Request
    		await AddRequestsAsync(new Request("https://github.com/zlzforever")
    		{
    			// Timeout: 10 seconds
    			Timeout = 10000
    		});
    	}
   
    	protected override SpiderId GenerateSpiderId()
    	{
    		return new(ObjectId.CreateId().ToString(), "Github");
    	}
   
    	class Parser : DataParser
    	{
    		public override Task InitializeAsync()
    		{
    			return Task.CompletedTask;
    		}
   
    		protected override Task ParseAsync(DataFlowContext context)
    		{
    			var selectable = context.Selectable;
    			// Resolve data
    			var author = selectable.XPath("//span[@class='p-name vcard-fullname d-block overflow-hidden']")
    				?.Value;
    			var name = selectable.XPath("//span[@class='p-nickname vcard-username d-block']")
    				?.Value;
    			context.AddData("author", author);
    			context.AddData("username", name);
    			return Task.CompletedTask;
    		}
    	}
    }
   ```



3. Add the code into `Main`

   ```
    	static async Task Main(string[] args)
    	{
    		ThreadPool.SetMaxThreads(255, 255);
    		ThreadPool.SetMinThreads(255, 255);
   
    		Log.Logger = new LoggerConfiguration()
    			.MinimumLevel.Information()
    			.MinimumLevel.Override("Microsoft.Hosting.Lifetime", LogEventLevel.Warning)
    			.MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
    			.MinimumLevel.Override("System", LogEventLevel.Warning)
    			.MinimumLevel.Override("Microsoft.AspNetCore.Authentication", LogEventLevel.Warning)
    			.Enrich.FromLogContext()
    			.WriteTo.Console().WriteTo.RollingFile("logs/spider.log")
    			.CreateLogger();
   
    		var builder = Builder.CreateDefaultBuilder<GithubSpider>(options =>
    		{
    			// 1 request per second
    			options.Speed = 1;
    		});
    		builder.UseSerilog();
    		builder.UseQueueDistinctBfsScheduler<HashSetDuplicateRemover>();
    		await builder.Build().RunAsync();
   
    		Console.WriteLine("Bye!");
    	}
   ```



4. Run

   ```
    [20:51:24 INF] 
    
      _____        _              _    _____       _     _
     |  __ \      | |            | |  / ____|     (_)   | |
     | |  | | ___ | |_ _ __   ___| |_| (___  _ __  _  __| | ___ _ __
     | |  | |/ _ \| __| '_ \ / _ \ __|\___ \| '_ \| |/ _` |/ _ \ '__|
     | |__| | (_) | |_| | | |  __/ |_ ____) | |_) | | (_| |  __/ |
     |_____/ \___/ \__|_| |_|\___|\__|_____/| .__/|_|\__,_|\___|_|     version: 5.0.8.0
                                            | |
                                            |_|
    
    [20:51:24 INF] RequestedQueueCount: 1000
    [20:51:24 INF] Depth: 0
    [20:51:24 INF] RetriedTimes: 3
    [20:51:24 INF] EmptySleepTime: 60
    [20:51:24 INF] Speed: 1
    [20:51:24 INF] Batch: 4
    [20:51:24 INF] RemoveOutboundLinks: False
    [20:51:24 INF] StorageType: DotnetSpider.MySql.MySqlEntityStorage, DotnetSpider.MySql
    [20:51:24 INF] RefreshProxy: 30
    [20:51:24 INF] Agent is starting
    [20:51:24 INF] Agent started
    [20:51:24 INF] Initialize spider 602e62cc5f337be5627cd768, Github
    [20:51:25 INF] 602e62cc5f337be5627cd768 DataFlows: Parser -> ConsoleStorage
    [20:51:25 INF] 602e62cc5f337be5627cd768 register topic DotnetSpider_602e62cc5f337be5627cd768
    [20:51:25 INF] Statistics service starting
    [20:51:25 INF] Statistics service started
    [20:51:30 INF] 602e62cc5f337be5627cd768 total 1, speed: 0, success 0, failure 0, left 1
    [20:51:31 INF] 602e62cc5f337be5627cd768 download https://github.com/zlzforever, l7nvHQ== completed
    
    DATA: {"username":"zlzforever","author":"Lewis Zou"}
    [20:51:35 INF] 602e62cc5f337be5627cd768 total 1, speed: 0.10, success 1, failure 0, left 0
    [20:51:40 INF] 602e62cc5f337be5627cd768 total 1, speed: 0.07, success 1, failure 0, left 0
    [20:52:28 INF] Statistics service stopping
    [20:52:28 INF] Statistics service stopped
    [20:52:28 INF] 602e62cc5f337be5627cd768 stopped
    [20:52:28 INF] Agent is stopping
    [20:52:28 INF] Agent stopped
    Bye!
   ```
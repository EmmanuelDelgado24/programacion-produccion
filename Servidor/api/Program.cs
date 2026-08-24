using api.Data;
using api.Repositories;
using api.Repositories.EmpleadosRespository;
using api.Repositories.ModelosRepository;
using api.Services;
using api.Services.EmpleadosService;
using api.Services.ModelosService;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection.Extensions;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Cargar URLs permitidas desde appsettings.json
var applicationUrl = builder.Configuration
    .GetSection("applicationUrl")
    .Get<string[]>();

// Add services to the container.

builder.Services.AddCors(options =>
{
    options.AddPolicy("SpecificPolicy", optiosCors =>
    {
        optiosCors.WithOrigins(applicationUrl)
                  .AllowAnyMethod()
                  .AllowAnyHeader();
    });
});

// Repositorios
builder.Services.AddScoped<ICorteRepository, CorteRepository>();
builder.Services.AddScoped<ICoordinadoRepository, CoordinadoRepository>();
builder.Services.AddScoped<IPespunteRepository, PespunteRepository>();
builder.Services.AddScoped<IMontadoRepository, MontadoRepository>();
builder.Services.AddScoped<IInyeccionRepository, InyeccionRepository>();
builder.Services.AddScoped<IPreacabadoRepository, PreacabadoRepository>();
builder.Services.AddScoped<IPlantillaRepository, PlantillaRepository>();

builder.Services.AddScoped<IEmpleadosGeneralRepository, EmpleadosGeneralRepository>();
builder.Services.AddScoped<IEmpleadosCorteRepository, EmpleadosCorteRepository>();
builder.Services.AddScoped<IEmpleadosCoordinadoRepository, EmpleadosCoordinadoRepository>();  
builder.Services.AddScoped<IEmpleadosPespunte242Repository, EmpleadosPespunte242Repository>();
builder.Services.AddScoped<IEmpleadosPespunte243Repository, EmpleadosPespunte243Repository>();
builder.Services.AddScoped<IEmpleadosPespunte244Repository, EmpleadosPespunte244Repository>();
builder.Services.AddScoped<IEmpleadosPespunte245Repository, EmpleadosPespunte245Repository>();
builder.Services.AddScoped<IEmpleadosPespunte246Repository, EmpleadosPespunte246Repository>();
builder.Services.AddScoped<IEmpleadosMontadoRepository, EmpleadosMontadoRepository>();
builder.Services.AddScoped<IEmpleadosAdornoRepository, EmpleadosAdornoRepository>();

builder.Services.AddScoped<IClienteRepository, ClienteRepository>();
builder.Services.AddScoped<IPedidoRepository, PedidoRepository>();
builder.Services.AddScoped<IProgramacionRepository, ProgramacionRepository>();

// Servicios
builder.Services.AddScoped<CorteService>();
builder.Services.AddScoped<CoordinadoService>();
builder.Services.AddScoped<PespunteService>();
builder.Services.AddScoped<MontadoService>();
builder.Services.AddScoped<InyeccionService>();
builder.Services.AddScoped<PreacabadoService>();
builder.Services.AddScoped<PlantillaService>();

builder.Services.AddScoped<EmpleadosGeneralService>();
builder.Services.AddScoped<EmpleadosCorteService>();
builder.Services.AddScoped<EmpleadosCoordinadoService>();
builder.Services.AddScoped<EmpleadosPespunte242Service>();
builder.Services.AddScoped<EmpleadosPespunte243Service>();
builder.Services.AddScoped<EmpleadosPespunte244Service>();
builder.Services.AddScoped<EmpleadosPespunte245Service>();
builder.Services.AddScoped<EmpleadosPespunte246Service>();
builder.Services.AddScoped<EmpleadosMontadoService>();
builder.Services.AddScoped<EmpleadosAdornoService>();

builder.Services.AddScoped<IClienteService, ClienteService>();
builder.Services.AddScoped<IPedidoService, PedidoService>();
builder.Services.AddScoped<ProgramacionService>();


builder.Services.AddControllersWithViews();

builder.Services.AddControllers()
.AddJsonOptions(options =>
 {
     // Esta es la línea mágica que rompe el bucle infinito
     options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;

     // Opcional: para que el JSON se vea más limpio
     options.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
 });



// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddDbContext<AppDbContextSqlServer>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("SqlServerConnection")));

// Fin área de servicios 


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}
app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseRouting();

app.UseCors("SpecificPolicy");

app.UseAuthorization();

app.MapControllers();

app.MapGet("/", () => "Hola Mundo ");

app.Run();

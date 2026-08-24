using api.Models;
using Microsoft.EntityFrameworkCore;
using api.DTOs;

namespace api.Data
{
    public class AppDbContextSqlServer : DbContext
    {
        public AppDbContextSqlServer(DbContextOptions<AppDbContextSqlServer> options) : base(options)
        {
        }

        public DbSet<Empleado> Empleados { get; set; }
        public DbSet<LogTcpIp> LogsTcpIp { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<EntradasHoyDTO>().HasNoKey();

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Empleado>(entity =>
            {
                entity.ToTable("empleados", "dbo"); //Configures the entity to map to a specific table in the database
                entity.HasKey(e => e.clave); //Defines the primary key(s) for the entity
            });

            modelBuilder.Entity<LogTcpIp>(entity =>
            {
                entity.ToTable("logstcpip", "dbo");
                entity.HasKey(l => new { l.clave, l.registro }); // reemplaza "id" por la PK real de esa tabla

                entity.HasOne(l => l.Empleado)// relación 1-1 ó 1-N
                      .WithMany(e => e.logsTcpIps)//1 - N 
                      .HasForeignKey(l => l.clave)//apuntador a la llave principal de la tabla principal etc
                      .HasPrincipalKey(e => e.clave);
            });

        }
    }
}

using Microsoft.EntityFrameworkCore;
using api.Models;
using api.Models.Modelos;

namespace api.Data
{
    public class ApplicationDbContext : DbContext
    {
        //La clase ApplicationDbContext debe exponer un constructor público con un parámetro
        //DbContextOptions<ApplicationDbContext>. Así es cómo se pasa la configuración de contexto
        //de AddDbContext a DbContext
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<Ciudad> Ciudades { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Departamento> Departamentos { get; set; }
        public DbSet<ModelosCorte> ModelosCorte { get; set; }
        public DbSet<ModelosCoordinado> ModelosCoordinado { get; set; }
        public DbSet<ModelosPespunte> ModelosPespunte { get; set; }
        public DbSet<ModelosMontado> ModelosMontado { get; set; }
        public DbSet<ModelosInyeccion> ModelosInyeccion { get; set; }
        public DbSet<ModelosPreacabado> ModelosPreacabado { get; set; }
        public DbSet<ModelosPlantilla> ModelosPlantilla { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet<PedidoDetalleNumeracion> PedidoDetallesNumeracion { get; set; }
        public DbSet<Programacion> Programacion { get; set; }

        public DbSet<ProgramacionDetalleNumeracion> ProgramacionDetallesNumeracion { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Ignore<Modelo>();

            //
            modelBuilder.Entity<Cliente>(entity =>
            {
                entity.ToTable("clientes");
                entity.HasKey(c => c.ClienteId);
                entity.Property(c => c.ClienteId).HasColumnName("Id");       // ← agrega
                entity.Property(c => c.nombre).HasColumnName("Nombre");
                entity.HasMany(c => c.Pedidos) // Cliente tiene MUCHOS pedidos
                      .WithOne(p => p.Cliente)// cada Pedido tiene UN cliente
                      .HasForeignKey(p => p.ClienteId); // FK vive en Pedido
            });

            modelBuilder.Entity<Pedido>(entity =>
            {
                entity.ToTable("pedidos");
                entity.HasKey(p => p.Id);
                entity.Property(p => p.Id).HasColumnName("Id");
                entity.Property(p => p.ClienteId).HasColumnName("idcliente");
                entity.Property(p => p.FechaDePedido).HasColumnName("fecha_de_pedido");
                entity.Property(p => p.FechaEntrega).HasColumnName("fecha_entrega");
                entity.Property(p => p.CantidadDePares).HasColumnName("cantidad_pares");
                entity.Property(p => p.Coleccion).HasColumnName("coleccion");
                entity.Property(p => p.ColorBigZap).HasColumnName("color_big_zap");
                entity.Property(p => p.Construccion).HasColumnName("construccion");
                entity.Property(p => p.FechaLiberacionExplosion).HasColumnName("fecha_liberacion_explosion");
                entity.Property(p => p.FechaRealizacionExplosion).HasColumnName("fecha_realizacion_explosion");
                entity.Property(p => p.PedidoCliente).HasColumnName("pedido_cliente");
                entity.Property(p => p.PedidoInterno).HasColumnName("pedido_interno");
                entity.Property(p => p.Piel).HasColumnName("piel");
                entity.Property(p => p.SemanaFolioExplosion).HasColumnName("semana_folio_explosion");
                entity.Property(p => p.SemanaProgramada).HasColumnName("semana_programada");
                entity.Property(p => p.Modelo).HasColumnName("modelo");

                entity.HasOne(p => p.Cliente)
                      .WithMany(c => c.Pedidos)
                      .HasForeignKey(p => p.ClienteId);

                entity.HasMany(p => p.DetallesNumeracion)
                      .WithOne(d => d.Pedido)
                      .HasForeignKey(d => d.PedidoId);

                entity.HasMany(p => p.Programaciones)
                      .WithOne(pr => pr.Pedido)
                      .HasForeignKey(pr => pr.IdPedido);

            });

            modelBuilder.Entity<PedidoDetalleNumeracion>(entity =>
            {
                entity.ToTable("pedido_detalle_numeracion");
                entity.HasKey(d => d.Id);
                entity.Property(d => d.Id).HasColumnName("Id");
                entity.Property(d => d.Talla).HasColumnName("talla");
                entity.Property(d => d.Cantidad).HasColumnName("cantidad");
                entity.Property(d => d.PedidoId).HasColumnName("pedido_id");
                entity.Property(d => d.ProgramacionIdPedido).HasColumnName("ProgramacionidPedido");

                entity.HasOne(d => d.Pedido)
                      .WithMany(p => p.DetallesNumeracion)
                      .HasForeignKey(d => d.PedidoId);

                entity.HasOne(d => d.Programacion)
                      .WithMany()
                      .HasForeignKey(d => d.ProgramacionIdPedido);
            });

            modelBuilder.Entity<ModelosCorte>(entity =>
            {
                entity.ToTable("modelos_corte");
                entity.HasKey(m => m.id);
                entity.Property(m => m.id).HasColumnName("id");
                entity.Property(m => m.linea).HasColumnName("linea");
                entity.Property(m => m.modelo).HasColumnName("modelo");
                entity.Property(m => m.estilo).HasColumnName("estilo");
                entity.Property(m => m.proceso).HasColumnName("proceso");
                entity.Property(m => m.tiempoPiel).HasColumnName("tiempo_piel");
                entity.Property(m => m.tiempoForro).HasColumnName("tiempo_forro");
                entity.Property(m => m.tiempoLoteo).HasColumnName("tiempo_loteo");
                entity.Property(m => m.tiempoStdMin).HasColumnName("tiempo_std_min");
            });

            modelBuilder.Entity<ModelosCoordinado>(entity =>
            {
                entity.ToTable("modelos_coordinado");
                entity.HasKey(m => m.id);
                entity.Property(m => m.id).HasColumnName("id");
                entity.Property(m => m.linea).HasColumnName("linea");
                entity.Property(m => m.modelo).HasColumnName("modelo");
                entity.Property(m => m.estilo).HasColumnName("estilo");
                entity.Property(m => m.proceso).HasColumnName("proceso");
                entity.Property(m => m.tiempoStdMin).HasColumnName("tiempo_std_min");
            });

            modelBuilder.Entity<ModelosPespunte>(entity =>
            {
                entity.ToTable("modelos_pespunte");
                entity.HasKey(m => m.id);
                entity.Property(m => m.id).HasColumnName("id");
                entity.Property(m => m.linea).HasColumnName("linea");
                entity.Property(m => m.modelo).HasColumnName("modelo");
                entity.Property(m => m.estilo).HasColumnName("estilo");
                entity.Property(m => m.proceso).HasColumnName("proceso");
                entity.Property(m => m.tiempoStdMin).HasColumnName("tiempo_std_min");
            });

            modelBuilder.Entity<ModelosMontado>(entity =>
            {
                entity.ToTable("modelos_montado");
                entity.HasKey(m => m.id);
                entity.Property(m => m.id).HasColumnName("id");
                entity.Property(m => m.linea).HasColumnName("linea");
                entity.Property(m => m.modelo).HasColumnName("modelo");
                entity.Property(m => m.estilo).HasColumnName("estilo");
                entity.Property(m => m.proceso).HasColumnName("proceso");
                entity.Property(m => m.tiempoStdMin).HasColumnName("tiempo_std_min");
            });

            modelBuilder.Entity<ModelosInyeccion>(entity =>
            {
                entity.ToTable("modelos_inyeccion");
                entity.HasKey(m => m.id);
                entity.Property(m => m.id).HasColumnName("id");
                entity.Property(m => m.linea).HasColumnName("linea");
                entity.Property(m => m.modelo).HasColumnName("modelo");
                entity.Property(m => m.estilo).HasColumnName("estilo");
                entity.Property(m => m.proceso).HasColumnName("proceso");
                entity.Property(m => m.tiempoStdMin).HasColumnName("tiempo_std_min");
            });

            modelBuilder.Entity<ModelosPreacabado>(entity =>
            {
                entity.ToTable("modelos_preacabado");
                entity.HasKey(m => m.id);
                entity.Property(m => m.id).HasColumnName("id");
                entity.Property(m => m.linea).HasColumnName("linea");
                entity.Property(m => m.modelo).HasColumnName("modelo");
                entity.Property(m => m.estilo).HasColumnName("estilo");
                entity.Property(m => m.proceso).HasColumnName("proceso");
                entity.Property(m => m.tiempoStdMin).HasColumnName("tiempo_std_min");
            });


            modelBuilder.Entity<Ciudad>(entity =>
            {
                entity.ToTable("ciudades");
                entity.HasKey(ci => ci.CiudadId);
                entity.Property(ci => ci.CiudadId).HasColumnName("id");
                entity.Property(ci => ci.nombre).HasColumnName("nombre");
            });

            modelBuilder.Entity<Departamento>(entity =>
            {
                entity.ToTable("departamentos");
                entity.HasKey(de => de.DepartamentonId);
                entity.Property(de => de.DepartamentonId).HasColumnName("id");
                entity.Property(de => de.Nombre).HasColumnName("nombre");
            });

            modelBuilder.Entity<ModelosPlantilla>(entity =>
            {
                entity.ToTable("modelos_plantilla");
                entity.HasKey(m => m.id);
                entity.Property(m => m.id).HasColumnName("id");
                entity.Property(m => m.linea).HasColumnName("linea");
                entity.Property(m => m.modelo).HasColumnName("modelo");
                entity.Property(m => m.estilo).HasColumnName("estilo");
                entity.Property(m => m.proceso).HasColumnName("proceso");
                entity.Property(m => m.tiempoStdMin).HasColumnName("tiempo_std_min");
            });

            modelBuilder.Entity<Programacion>(entity =>
            {
                entity.ToTable("programacion");
                entity.HasKey(pro => pro.IdPedido);
                entity.Property(pro => pro.IdPedido).HasColumnName("idpedido");
                entity.Property(pro => pro.Cliente).HasColumnName("cliente");
                entity.Property(pro => pro.Semana).HasColumnName("semana");
                entity.Property(pro => pro.Departamento).HasColumnName("departamento");
                entity.Property(pro => pro.Linea).HasColumnName("linea");
                entity.Property(pro => pro.Dia).HasColumnName("dia");
                entity.Property(pro => pro.Modelo).HasColumnName("modelo");
                entity.Property(pro => pro.DemandaDia).HasColumnName("demanda_dia");
                entity.Property(pro => pro.Personal).HasColumnName("personal");
                entity.Property(pro => pro.MinutosDispo).HasColumnName("minutos_dispo");
                entity.Property(pro => pro.TiempoEst).HasColumnName("tiempo_est");
                entity.Property(pro => pro.CapacidadDia).HasColumnName("capacidad_dia");
                entity.Property(pro => pro.CargaDia).HasColumnName("carga_dia");
                entity.Property(pro => pro.Saturacion).HasColumnName("saturacion");
                entity.Property(pro => pro.CapacidadReal).HasColumnName("capacidad_real");
                entity.Property(pro => pro.ProgramacionIdeal).HasColumnName("programacion_ideal");
                entity.Property(pro => pro.Deficit).HasColumnName("deficit");
                entity.Property(pro => pro.CiudadId).HasColumnName("Ciudadid");
                entity.Property(pro => pro.ClienteId).HasColumnName("ClienteId");
                entity.Property(pro => pro.DepartamentoId).HasColumnName("Departamentoid");

                entity.HasOne(pro => pro.Pedido)
                      .WithMany(p => p.Programaciones)
                      .HasForeignKey(pro => pro.IdPedido);

                entity.HasOne(pro => pro.Clientenav)
                      .WithMany()
                      .HasForeignKey(pro => pro.ClienteId);

                entity.HasOne(pro => pro.Departamentonav)
                      .WithMany()
                      .HasForeignKey(pro => pro.DepartamentoId);

                entity.HasOne(pro => pro.Ciudad)
                      .WithMany()
                      .HasForeignKey(pro => pro.CiudadId);

                entity.HasMany(pro => pro.DetallesNumeracion)
                      .WithOne(d => d.Programacion)
                      .HasForeignKey(d => d.ProgramacionId);
            });

            // ... bloque Programacion que ya tienes ...

            modelBuilder.Entity<ProgramacionDetalleNumeracion>(entity =>
            {
                entity.ToTable("programacion_detalle_numeracion");
                entity.HasKey(x => x.Id);
                entity.Property(x => x.Id).HasColumnName("id");
                entity.Property(x => x.ProgramacionId).HasColumnName("programacion_id");
                entity.Property(x => x.Talla).HasColumnName("talla");
                entity.Property(x => x.Cantidad).HasColumnName("cantidad");

                entity.HasOne(x => x.Programacion)
                      .WithMany(p => p.DetallesNumeracion)
                      .HasForeignKey(x => x.ProgramacionId);
            });

        } // ← cierre de OnModelCreating
    } // ← cierre de la clase
}
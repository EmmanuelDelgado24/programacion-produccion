using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("pedidos")]
    public class Pedido
    {
        [Key]
        [Column("Id")]
        public int Id { get; set; }

        // FK Cliente
        // Relaciones
        [Column("idcliente")]
        public int ClienteId { get; set; }
        [Column("fecha_de_pedido")]
        public DateTime FechaDePedido { get; set; }

        [Column("fecha_entrega")]
        public DateTime FechaEntrega { get; set; }

        [Column("cantidad_pares")]
        public int CantidadDePares { get; set; } = 0;
        [Column("coleccion")]
        public string? Coleccion { get; set; }

        [Column("color_big_zap")]
        public string? ColorBigZap { get; set; }

        [Column("construccion")]
        public string? Construccion { get; set; }

        [Column("fecha_liberacion_explosion")]
        public DateTime? FechaLiberacionExplosion { get; set; }

        [Column("fecha_realizacion_explosion")]
        public DateTime? FechaRealizacionExplosion { get; set; }

        [Column("pedido_cliente")] // Columna "Pedido Cliente"
        public string PedidoCliente { get; set; } = string.Empty;

        [Column("pedido_interno")] // Columna "Pedido Inter"
        public int? PedidoInterno { get; set; }

        [Column("piel")]
        public string? Piel { get; set; }

        [Column("semana_folio_explosion")] // Columna "Semana y Folio de Explosion"
        public string? SemanaFolioExplosion { get; set; }

        [Column("semana_programada")]
        public string? SemanaProgramada { get; set; }
        [Column("modelo")]
        public string? Modelo { get; set; }

        public Cliente? Cliente { get; set; }

        //public ICollection<Programacion> Programaciones { get; set; }

        public ICollection<PedidoDetalleNumeracion> DetallesNumeracion { get; set; }

        public ICollection<Programacion> Programaciones { get; set; }

        // Constructor vacío
        public Pedido()
        {
            DetallesNumeracion = new List<PedidoDetalleNumeracion>();
            Programaciones = new List<Programacion>();
        }
    }
}

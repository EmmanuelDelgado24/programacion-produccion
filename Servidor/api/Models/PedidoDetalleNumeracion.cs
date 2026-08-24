using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace api.Models
{
    [Table("pedido_detalle_numeracion")]
    public class PedidoDetalleNumeracion
    {
        [Key]
        public int Id { get; set; }

        [Column("talla")]
        public int Talla { get; set; }

        [Column("cantidad")]
        public int Cantidad { get; set; }

        // FK hacia Pedido
        [Column("pedido_id")]
        public int PedidoId { get; set; }
        public int? ProgramacionIdPedido { get; set; }

        [JsonIgnore] // <--- Esto evita el ciclo infinito
         public virtual Pedido? Pedido { get; set; }

        [JsonIgnore] 
        public Programacion? Programacion { get; set; }
    }
}

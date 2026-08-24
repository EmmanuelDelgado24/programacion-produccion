using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models
{
    [Table("clientes")]
    public class Cliente
    {
        [Key]
        [Column("Id")]
        public int ClienteId { get; set; }

        [Required]      
        [MaxLength(200)]
        [Column("nombre")]
        public string nombre { get; set; }

        public List<Pedido> Pedidos { get; set; }


        public Cliente()
        {
            Pedidos = new List<Pedido>();
        }
        public Cliente(int ClienteId, string nombre)
        {
            this.ClienteId = ClienteId;
            this.nombre = nombre;
            Pedidos = new List<Pedido>();
        }
    }
}

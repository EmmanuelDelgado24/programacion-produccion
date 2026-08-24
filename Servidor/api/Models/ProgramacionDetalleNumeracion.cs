using System.Text.Json.Serialization;

namespace api.Models
{
    public class ProgramacionDetalleNumeracion
    {
        public int Id { get; set; }

        public int ProgramacionId { get; set; }

        public int Talla { get; set; }

        public int Cantidad { get; set; }

        [JsonIgnore]
        public Programacion? Programacion { get; set; }
    }
}

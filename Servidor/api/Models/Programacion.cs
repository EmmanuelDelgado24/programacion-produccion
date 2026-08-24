using api.Migrations;
using System.Collections;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
namespace api.Models
{
    public class Programacion
    {
       // public int ProgramacionId { get; set; }
        public int IdPedido { get; set; }
        public string Cliente { get; set; }
        public int Semana { get; set; }
        public string Departamento { get; set; }
        public string Linea { get; set; }
        public string Dia {  get; set; }
        public int Modelo { get; set; }
        public int DemandaDia { get; set; }
        public int Personal {  get; set; }
        public int MinutosDispo {  get; set; }
        public decimal TiempoEst {  get; set; }
        public int CapacidadDia { get; set; }
        public int CargaDia { get; set; }
        public decimal Saturacion { get; set; }
        public int CapacidadReal { get; set; }
        public int ProgramacionIdeal { get; set; }
        public int Deficit { get; set; }

        // LLAVES FORÁNEAS (Lo que se guarda en la base de datos)

        [Column("Ciudadid")]
        public int? CiudadId { get; set; }
        [Column("ClienteId")]
        public int? ClienteId { get; set; }

        [Column("Departamentoid")]
        public int? DepartamentoId { get; set; }


        [JsonIgnore]
        public Pedido? Pedido { get; set; }

        [JsonIgnore]
        public Cliente? Clientenav { get; set; }

        [JsonIgnore]
        public Departamento? Departamentonav { get; set; }

        [JsonIgnore]
        public Ciudad? Ciudad { get; set; }

      
        public ICollection<ProgramacionDetalleNumeracion> DetallesNumeracion { get; set; }

        public Programacion() 
        {
           DetallesNumeracion = new List<ProgramacionDetalleNumeracion>();
        }

    }
}

using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models.Modelos
{
    [NotMapped]
    public abstract class Modelo
    {
        public int id { get; set; }
        public string linea { get; set; }
        public char modelo { get; set; }
        public string estilo { get; set; }
        public string proceso { get; set; }
        public double tiempoEstandar { get; set; }

        public Pedido? Pedido { get; set; }

        public int idPedido { get; set; }

        public Modelo()
        {
        }
        public Modelo(int id, string linea, char modelo, string estilo, string proceso, double tiempoEstandar)
        {
            this.id = id;
            this.linea = linea;
            this.modelo = modelo;
            this.estilo = estilo;
            this.proceso = proceso;
            this.tiempoEstandar = tiempoEstandar;
        }
    }
}

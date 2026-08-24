using Microsoft.Identity.Client;

namespace api.Models
{
    public class Empleado
    {
        public string clave {  get; set; }
        public string nombre { get; set; }
        public string apellidopaterno { get; set; }
        public string apellidomaterno { get; set; }
        public string email { get; set; }
        public string departamento { get; set; }
        public DateTime fechacumple { get; set; }
        public string puesto { get; set; }
        public DateTime fechaalta { get; set; }


        public List<LogTcpIp> logsTcpIps { get; set; } 
        
        public Empleado()
        {
            logsTcpIps =  new List<LogTcpIp>();
        }
        public Empleado(int Id, string clave, string nombre, string apellidopaterno, string apellidomaterno,
            string email,DateTime fechacumple, string puesto, DateTime fechaalta)
        {
            this.clave = clave;
            this.nombre = nombre;
            this.apellidopaterno = apellidopaterno;
            this.apellidomaterno = apellidomaterno;
            this.email = email;
            this.fechacumple = fechacumple;
            this.puesto = puesto;
            this.fechaalta = fechaalta;
            logsTcpIps = new List<LogTcpIp>();
        }

    }
}
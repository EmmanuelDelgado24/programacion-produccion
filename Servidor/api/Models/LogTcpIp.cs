namespace api.Models
{
    public class LogTcpIp
    {
        public string equipo { get; set; }
        public string clave { get; set; }           // FK hacia Empleado
        public DateTime registro { get; set; }
        public string mododeregistro { get; set; }
        public string UltimoEStatus { get; set; }
        public int tipodeturno { get; set; }
        public string turno { get; set; }
        public DateTime? descarga { get; set; }     // nullable, hay NULLs
        public string estacion { get; set; }
        public string Modulo { get; set; }
        public string? Reproceso { get; set; }
        public string? estacionReproceso { get; set; }
        public string? TipoEstado { get; set; }
        public string? temperatura { get; set; }
        public string? horaproceso { get; set; }
        public Empleado? Empleado { get; set; }

        public LogTcpIp() { }

        public LogTcpIp(string equipo, string clave, DateTime registro, string mododeregistro, string UltimoEStatus,
                        int tipodeturno, string turno, DateTime? descarga, string estacion,string Modulo, string? Reproceso,
                        string? estacionReproceso, string? TipoEstado, string? temperatura,string? horaproceso, Empleado? empleado)
        {
            this.equipo = equipo;
            this.clave = clave;
            this.registro = registro;
            this.mododeregistro = mododeregistro;
            this.UltimoEStatus = UltimoEStatus;
            this.tipodeturno = tipodeturno;
            this.turno = turno;
            this.descarga = descarga;
            this.estacion = estacion;
            this.Modulo = Modulo;
            this.Reproceso = Reproceso;
            this.estacionReproceso = estacionReproceso;
            this.TipoEstado = TipoEstado;
            this.temperatura = temperatura;
            this.horaproceso = horaproceso;
            Empleado = empleado;
            
        }
    }
}

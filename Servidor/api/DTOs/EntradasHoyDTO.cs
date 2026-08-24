namespace api.DTOs
{
    public class EntradasHoyDTO
    {
        public string Clave { get; set; }
        public DateTime Registro { get; set; }
        public string UltimoEstatus { get; set; }
        public string Descarga { get; set; }
        public string Nombre { get; set; }
        public string ApellidoPaterno { get; set; }
        public string ApellidoMaterno { get; set; }
        public string Email { get; set; }
        public string Departamento { get; set; }
        public DateTime FechaCumple { get; set; }
        public string Puesto { get; set; }
        public DateTime FechaAlta { get; set; }
        public int TotalRegistros { get; set; }  // IMPORTANTE → Debe coincidir con COUNT(*) OVER()
    }
}

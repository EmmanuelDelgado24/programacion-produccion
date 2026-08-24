namespace api.Models
{
    public class Ciudad
    {
        public int CiudadId { get; set; }
        public string nombre { get; set; }

        public int DepartamentoId { get; set; }
        public Departamento? Departamento { get; set; }

        public Ciudad() 
        {
            
        }
        public Ciudad(int CiudadId, string nombre)
        {
            this.CiudadId = CiudadId;
            this.nombre = nombre;
            
        }
    }
}

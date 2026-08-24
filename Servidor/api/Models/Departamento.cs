namespace api.Models
{
    public class Departamento
    {
        public int DepartamentonId   { get; set; }
        public string Nombre { get; set; }

        public List<Ciudad> ciudades { get; set; }

        //public List<Empleado> empleados {  get; set; }

        public Departamento() 
        {
            //empleados = new List<Empleado>();  
            ciudades = new List<Ciudad>();
        }
        public Departamento(int DepartamentonId, string nombre)
        {
            this.DepartamentonId = DepartamentonId;
            this.Nombre = nombre;
            //empleados = new List<Empleado>();
            ciudades = new List<Ciudad>();
        }
    }
}

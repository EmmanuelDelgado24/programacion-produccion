using api.Models;

namespace api.Repositories.EmpleadosRespository
{
    public interface IEmpleadosPespunte246Repository
    {
        Task<Empleado?> GetEmpleadoPespunte246(string clave);
        Task<List<Empleado>> GetEmpleadosPespunte246();
    }
}

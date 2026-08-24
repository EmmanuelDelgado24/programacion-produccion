using api.Models;

namespace api.Repositories.EmpleadosRespository
{
    public interface IEmpleadosPespunte244Repository
    {
        Task<Empleado?> GetEmpleadoPespunte244(string clave);
        Task<List<Empleado>> GetEmpleadosPespunte244();
    }
}

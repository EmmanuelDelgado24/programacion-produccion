using api.Models;

namespace api.Repositories.EmpleadosRespository
{
    public interface IEmpleadosPespunte243Repository
    {
        Task<Empleado?> GetEmpleadoPespunte243(string clave);
        Task<List<Empleado>> GetEmpleadosPespunte243();
    }
}

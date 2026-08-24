using api.Models;

namespace api.Repositories.EmpleadosRespository
{
    public interface IEmpleadosPespunte242Repository
    {
        Task<Empleado?> GetEmpleadoPespunte242(string clave);
        Task<List<Empleado>> GetEmpleadosPespunte242();
    }
}

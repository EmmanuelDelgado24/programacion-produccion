using api.Models;

namespace api.Repositories.EmpleadosRespository
{
    public interface IEmpleadosPespunte245Repository
    {
        public Task<Empleado?> GetEmpleadoPespunte245(string clave);
        public Task<List<Empleado>> GetEmpleadosPespunte245();
    }
}

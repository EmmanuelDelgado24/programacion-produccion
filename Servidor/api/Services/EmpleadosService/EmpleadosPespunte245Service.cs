using api.Models;
using api.Repositories.EmpleadosRespository;

namespace api.Services.EmpleadosService
{
    public class EmpleadosPespunte245Service
    {
        private readonly IEmpleadosPespunte245Repository repo;

        public EmpleadosPespunte245Service(IEmpleadosPespunte245Repository repo)
        {
            this.repo = repo;
        }

        public async Task<List<Empleado?>> GetEmpleadosPespunte245()
        {
            return await repo.GetEmpleadosPespunte245();
        }

        public async Task<Empleado> GetEmpleadoPespunte245(string clave)
        {
            return await repo.GetEmpleadoPespunte245(clave);
        }
    }
}

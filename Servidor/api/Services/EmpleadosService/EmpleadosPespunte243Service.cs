using api.Models;
using api.Repositories.EmpleadosRespository;

namespace api.Services.EmpleadosService
{
    public class EmpleadosPespunte243Service
    {
        private readonly IEmpleadosPespunte243Repository repo;

        public EmpleadosPespunte243Service(IEmpleadosPespunte243Repository repo)
        {
            this.repo = repo;
        }

        public async Task<List<Empleado>> GetEmpleadosPespunte243()
        {
            return await repo.GetEmpleadosPespunte243();
        }

        public async Task<Empleado?> GetEmpleadoPespunte243(string clave)
        {
            return await repo.GetEmpleadoPespunte243(clave);
        }
    }
}

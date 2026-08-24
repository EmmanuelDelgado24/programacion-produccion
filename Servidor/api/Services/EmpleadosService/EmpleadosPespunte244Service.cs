using api.Models;
using api.Repositories.EmpleadosRespository;

namespace api.Services.EmpleadosService
{
    public class EmpleadosPespunte244Service
    {
        private readonly IEmpleadosPespunte244Repository repo;
        public EmpleadosPespunte244Service(IEmpleadosPespunte244Repository repo)
        {
            this.repo = repo;
        }

        public async Task<List<Empleado?>> GetEmpleadosPespunte244()
        {
            return await repo.GetEmpleadosPespunte244();
        }

        public async Task<Empleado?> GetEmpleadoPespunte244(string clave)
        {
            return await repo.GetEmpleadoPespunte244(clave);
        }
    }
}

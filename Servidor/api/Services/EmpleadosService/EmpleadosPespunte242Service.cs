using api.Models;
using api.Repositories.EmpleadosRespository;

namespace api.Services.EmpleadosService
{
    public class EmpleadosPespunte242Service
    {
        private readonly IEmpleadosPespunte242Repository repo;

        public EmpleadosPespunte242Service(IEmpleadosPespunte242Repository repo)
        {
            this.repo = repo;
        }

        public async Task<List<Empleado?>> GetEmpleadosPespunte242()
        {
            return await repo.GetEmpleadosPespunte242();
        }

        public async Task<Empleado?> GetEmpleadoPespunte244(string clave)
        {
            return await repo.GetEmpleadoPespunte242(clave);
        }
    }
}

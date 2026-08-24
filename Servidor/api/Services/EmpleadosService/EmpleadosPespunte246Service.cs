using api.Models;
using api.Repositories.EmpleadosRespository;

namespace api.Services.EmpleadosService
{
    public class EmpleadosPespunte246Service
    {
        private readonly IEmpleadosPespunte246Repository repo;

        public EmpleadosPespunte246Service(IEmpleadosPespunte246Repository repo)
        { 
            this.repo = repo;
        }

        public async Task<List<Empleado?>> GetEmpleadosPespunte246()
        {
            return await repo.GetEmpleadosPespunte246();
        }

        public async Task<Empleado?> GetEmpleadoPespunte246(string clave)
        {
            return await repo.GetEmpleadoPespunte246(clave);
        }   
    }
}

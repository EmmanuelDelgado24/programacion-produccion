using api.Models;
using api.Repositories.EmpleadosRespository;

namespace api.Services.EmpleadosService
{
    public class EmpleadosGeneralService
    {
        private readonly IEmpleadosGeneralRepository repo;
        public EmpleadosGeneralService(IEmpleadosGeneralRepository repo)
        { 
            this.repo = repo;
        }

        public Task<List<Empleado?>> GetEmpleadosGeneral()
        {
            return repo.GetEmpleadosGeneral();
        }

        public Task<Empleado?> GetEmpleadoGeneral(string clave)
        {
            return repo.GetEmpleadoGeneral(clave);
        }
    }
}

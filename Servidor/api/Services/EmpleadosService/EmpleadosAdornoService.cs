using api.Models;
using api.Repositories.EmpleadosRespository;

namespace api.Services.EmpleadosService
{
    public class EmpleadosAdornoService
    {
        private readonly IEmpleadosAdornoRepository repo;

        public EmpleadosAdornoService(IEmpleadosAdornoRepository repo)
        {
            this.repo = repo;
        }

        public Task<List<Empleado?>> GetEmpleadosAdorno()
        {
            return repo.GetEmpleadosAdorno();
        }
         public Task<Empleado?> GetEmpleadoAdorno(string clave)
        {
            return repo.GetEmpleadoAdorno(clave);
        }
    }
}

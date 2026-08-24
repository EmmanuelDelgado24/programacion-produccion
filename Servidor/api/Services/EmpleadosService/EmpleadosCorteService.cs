using api.Models;
using api.Repositories.EmpleadosRespository;

namespace api.Services.EmpleadosService
{
    public class EmpleadosCorteService
    {
        private readonly IEmpleadosCorteRepository repo;

        public EmpleadosCorteService(IEmpleadosCorteRepository repo)
        {
            this.repo = repo;
        }

        public Task<List<Empleado?>> GetEmpleadosCorte()
        {
            return repo.GetEmpleadosCorte();
        }
         public Task<Empleado?> GetEmpleadoCorte(string clave)
        {
            return repo.GetEmpleadoCorte(clave);
        }
    }
}

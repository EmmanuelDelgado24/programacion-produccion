using api.Models;
using api.Repositories.EmpleadosRespository;

namespace api.Services.EmpleadosService
{
    public class EmpleadosMontadoService
    {
        public readonly IEmpleadosMontadoRepository repo;

        public EmpleadosMontadoService(IEmpleadosMontadoRepository repo)
        {
            this.repo = repo;
        }

        public Task<List<Empleado?>> GetEmpleadosMontado()
        {
            return repo.GetEmpleadosMontado();
        }

        public Task<Empleado?> GetEmpleadoMontado(string clave)
        {
            return repo.GetEmpleadoMontado(clave);
        }
    }
}

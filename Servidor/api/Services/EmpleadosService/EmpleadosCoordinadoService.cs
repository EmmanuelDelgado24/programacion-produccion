using api.Data;
using api.Models;
using api.Repositories.EmpleadosRespository;
using Microsoft.EntityFrameworkCore;

namespace api.Services.EmpleadosService
{
    public class EmpleadosCoordinadoService
    {
        private readonly IEmpleadosCoordinadoRepository repo;

        public EmpleadosCoordinadoService(IEmpleadosCoordinadoRepository repo) 
        {
            this.repo = repo;
        }

        public Task<List<Empleado?>> GetEmpleadosCoordinado()
        {
            return repo.GetEmpleadosCoordinado();
        }
        public Task<Empleado?> GetEmpleadoCoordinado(string clave)
        {
            return repo.GetEmpleadoCoordinado(clave);
        }
    }
}

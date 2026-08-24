using api.Models;

namespace api.Repositories.EmpleadosRespository
{
    public interface IEmpleadosCoordinadoRepository
    {
        Task<Empleado?> GetEmpleadoCoordinado(string clave);

        Task<List<Empleado>> GetEmpleadosCoordinado();
    }
}

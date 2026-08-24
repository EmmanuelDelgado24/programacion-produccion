using api.Models;

namespace api.Repositories.EmpleadosRespository
{
    public interface IEmpleadosMontadoRepository
    {
        Task<Empleado?> GetEmpleadoMontado(string clave);
        Task<List<Empleado>> GetEmpleadosMontado();
    }
}

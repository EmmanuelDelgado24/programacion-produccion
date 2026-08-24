using api.Models;

namespace api.Repositories.EmpleadosRespository
{
    public interface IEmpleadosAdornoRepository
    {
        Task<Empleado?> GetEmpleadoAdorno(string clave);
        Task<List<Empleado>> GetEmpleadosAdorno();
    }
}

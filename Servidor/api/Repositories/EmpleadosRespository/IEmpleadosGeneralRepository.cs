using api.Models;

namespace api.Repositories.EmpleadosRespository
{
    public interface IEmpleadosGeneralRepository
    {
        Task<Empleado?> GetEmpleadoGeneral(string clave);
        Task<List<Empleado>> GetEmpleadosGeneral();
    }
}

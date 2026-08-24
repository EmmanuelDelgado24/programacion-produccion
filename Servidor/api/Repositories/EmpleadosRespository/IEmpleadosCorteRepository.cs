using api.Models;

namespace api.Repositories.EmpleadosRespository
{
    public interface IEmpleadosCorteRepository
    {
        Task <Empleado?> GetEmpleadoCorte(string clave);
        Task<List<Empleado>> GetEmpleadosCorte();
    }
}

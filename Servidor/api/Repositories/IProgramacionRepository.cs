using api.Models;

namespace api.Repositories
{
    public interface IProgramacionRepository
    {
        Task<Programacion> GetSemana(int semana);
        Task<Programacion> GetDepartamento(string departamento);
        Task<Programacion> GetModelo(int modelo);
        Task<List<Programacion?>> GetProgramacion();
        Task<List<Programacion>> CrearProgramacion(List<Programacion> programaciones);
        Task<Programacion?> UpdateProgramacion(int idPedido, Programacion programacion);
        Task<bool> DeleteProgramacion(string departamento);
    }
}

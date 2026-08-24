using api.Models;
using api.Repositories;

namespace api.Services
{
    public class ProgramacionService
    {
        private readonly IProgramacionRepository repo;

        public ProgramacionService(IProgramacionRepository repo) 
        {
            this.repo = repo;
        }

        public Task<Programacion?> GetSemana(int semana) 
        {
            return repo.GetSemana(semana);
        }
        public Task<Programacion?> GetDepartamento(string departamento)
        {
            return repo.GetDepartamento(departamento);
        }
        public Task<Programacion?> GetModelo(int modelo)
        {
            return repo.GetModelo(modelo);
        }
        public Task<List<Programacion?>> GetProgramacion() 
        {
            return repo.GetProgramacion();
        }
        public Task<List<Programacion?>> CrearProgramacion(List<Programacion> programaciones) 
        {
            return repo.CrearProgramacion(programaciones);
        }
        public Task<Programacion?> UpdateProgramacion(int idPedido, Programacion programacion)
        {
             return repo.UpdateProgramacion(idPedido, programacion);
        }

        public Task<bool> DeleteProgramacion(string departamento)
        {
            return repo.DeleteProgramacion(departamento);
        }
    }
}

using api.Models.Modelos;
using api.Repositories.ModelosRepository;

namespace api.Services.ModelosService
{
    public class CoordinadoService
    {
        private ICoordinadoRepository repo;

        public CoordinadoService(ICoordinadoRepository repo) 
        {
            this.repo = repo;
        }

        public Task<List<ModelosCoordinado?>> GetModelosCoordinado()
        {
            return repo.GetModelosCoordinado();
        }

        public Task<ModelosCoordinado?> GetPorEstilo(string modelo)
        {
            return repo.GetModelosCoordinado(modelo);
        }
    }
}

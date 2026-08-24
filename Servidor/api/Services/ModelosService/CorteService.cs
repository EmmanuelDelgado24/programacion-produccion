using api.Models.Modelos;
using api.Repositories.ModelosRepository;

namespace api.Services.ModelosService
{
    public class CorteService
    {
        private readonly ICorteRepository repo;
        public CorteService(ICorteRepository repo)
        {
            this.repo = repo;
        }

        public Task<List<ModelosCorte?>> GetModelosCorte()
        {
            return repo.GetModelosCorte();
        }

        public Task<ModelosCorte?> GetPorEstilo(string modelo)
        {
            return repo.GetModelosCorte(modelo);
        }
    }
}

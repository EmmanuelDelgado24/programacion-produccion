using api.Models.Modelos;
using api.Repositories.ModelosRepository;

namespace api.Services.ModelosService
{
    public class MontadoService
    {
        private readonly IMontadoRepository repo;
        public MontadoService(IMontadoRepository repo) 
        { 
            this.repo = repo;
        }

        public Task<List<ModelosMontado?>> GetModelosMontados()
        {
            return repo.GetModelosMontados();
        }

        public Task<ModelosMontado?> GetPorEstilo(string modelo)
        {
            return repo.GetModelosMontados(modelo);
        }
    }
}

using api.Models.Modelos;
using api.Repositories.ModelosRepository;
using Microsoft.Identity.Client;

namespace api.Services.ModelosService
{
    public class PespunteService
    {
        private readonly IPespunteRepository repo;

        public PespunteService(IPespunteRepository repo) 
        {
            this.repo = repo;
        }

        public Task<List<ModelosPespunte?>> GetModelosPespunte()
        {
            return repo.GetModelosPespunte();
        }

        public async Task<ModelosPespunte?> GetPorEstilo(string modelo)
        {
            return await repo.GetModelosPespunte(modelo);
        }
    }
}

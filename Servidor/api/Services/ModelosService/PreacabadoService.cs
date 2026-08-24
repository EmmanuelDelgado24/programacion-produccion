using api.Models.Modelos;
using api.Repositories.ModelosRepository;

namespace api.Services.ModelosService
{
    public class PreacabadoService
    {
        private readonly IPreacabadoRepository repo;

        public PreacabadoService(IPreacabadoRepository repo) 
        {
            this.repo = repo;
        }
        public Task<List<ModelosPreacabado?>> GetModelosPreacabado()
        {
            return repo.GetModelosPreacabado();
        }

        public Task<ModelosPreacabado?> GetPorEstilo(string modelo)
        {
            return repo.GetModelosPreacabado(modelo);
        }
    }
}

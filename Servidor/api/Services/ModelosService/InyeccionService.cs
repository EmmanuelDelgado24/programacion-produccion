using api.Models.Modelos;
using api.Repositories.ModelosRepository;

namespace api.Services.ModelosService
{
    public class InyeccionService
    {
        private readonly IInyeccionRepository repo;

        public InyeccionService(IInyeccionRepository repo) 
        { 
            this.repo = repo;
        }

        public Task<List<ModelosInyeccion?>> GetModelosInyeccion()
        {
            return repo.GetModelosInyeccion();
        }

        public Task<ModelosInyeccion?> GetPorEstilo(string modelo)
        {
            return repo.GetModelosInyeccion(modelo);
        }
    }
}

using api.Models.Modelos;
using api.Repositories.ModelosRepository;

namespace api.Services.ModelosService
{
    public class PlantillaService
    {
        private readonly IPlantillaRepository repo;

        public PlantillaService(IPlantillaRepository repo) 
        {
            this.repo = repo;
        }
        public Task<List<ModelosPlantilla?>> GetModelosPlantilla()
        {
            return repo.GetModelosPlantilla();
        }

        public Task<ModelosPlantilla?> GetPorEstilo(string modelo)
        {
            return repo.GetModelosPlantilla(modelo);
        }
    }
}

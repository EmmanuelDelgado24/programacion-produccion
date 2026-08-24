using api.Models.Modelos;

namespace api.Repositories.ModelosRepository
{
    public interface IPlantillaRepository
    {
        Task<ModelosPlantilla> GetModelosPlantilla(string modelo);
        Task<List<ModelosPlantilla>> GetModelosPlantilla();
    }
}

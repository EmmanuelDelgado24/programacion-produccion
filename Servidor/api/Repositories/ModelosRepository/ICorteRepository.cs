using api.Models.Modelos;

namespace api.Repositories.ModelosRepository
{
    public interface ICorteRepository
    {
        Task<ModelosCorte?> GetModelosCorte(string modelo);
        Task<List<ModelosCorte>> GetModelosCorte();
    }
}

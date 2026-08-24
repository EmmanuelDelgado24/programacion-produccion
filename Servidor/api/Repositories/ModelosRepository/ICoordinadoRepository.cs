using api.Models.Modelos;

namespace api.Repositories.ModelosRepository
{
    public interface ICoordinadoRepository
    {
        Task<ModelosCoordinado?> GetModelosCoordinado(string modelo);

        Task<List<ModelosCoordinado>> GetModelosCoordinado();
    }
}

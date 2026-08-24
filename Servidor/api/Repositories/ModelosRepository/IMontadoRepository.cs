using api.Models.Modelos;

namespace api.Repositories.ModelosRepository
{
    public interface IMontadoRepository
    {
        Task<ModelosMontado?> GetModelosMontados(string modelo);

        Task<List<ModelosMontado?>> GetModelosMontados();
    }
}

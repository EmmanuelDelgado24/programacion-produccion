using api.Models.Modelos;

namespace api.Repositories.ModelosRepository
{
    public interface IPespunteRepository
    {
        Task<ModelosPespunte?> GetModelosPespunte(string modelo);
        
        Task<List<ModelosPespunte?>> GetModelosPespunte();

    }
}

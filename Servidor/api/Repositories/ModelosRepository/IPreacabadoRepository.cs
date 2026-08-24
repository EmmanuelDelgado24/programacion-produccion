using api.Models.Modelos;

namespace api.Repositories.ModelosRepository
{
    public interface IPreacabadoRepository
    {
        Task<ModelosPreacabado> GetModelosPreacabado(string modelo);
        Task<List<ModelosPreacabado?>> GetModelosPreacabado();
    }
}

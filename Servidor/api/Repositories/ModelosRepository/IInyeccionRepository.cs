using api.Models.Modelos;

namespace api.Repositories.ModelosRepository
{
    public interface IInyeccionRepository
    {
        Task<ModelosInyeccion> GetModelosInyeccion(string modelo);
        Task<List<ModelosInyeccion>> GetModelosInyeccion();
    }
}

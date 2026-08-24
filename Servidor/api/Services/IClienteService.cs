using api.Models;

namespace api.Services
{
    public interface IClienteService
    {
        Task<Cliente?> GetCliente(string cliente);
        Task<List<Cliente>> GetClientes();
        Task<Cliente?> GetClienteId(int id);
        Task<Cliente> CreateCliente(Cliente cliente);
        Task<Cliente?> UpdateCliente(int id, Cliente cliente);
        Task<bool> DeleteCliente(int id);
    }
}

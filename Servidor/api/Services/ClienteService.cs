using api.Models;
using api.Repositories;

namespace api.Services
{
    public class ClienteService : IClienteService
    {
        private readonly IClienteRepository repo;

        public ClienteService(IClienteRepository repo) 
        {
            this.repo = repo;
        }
        public async Task<Cliente?> GetCliente(string cliente)
        {
            return await repo.GetCliente(cliente);
        }
        public async Task<List<Cliente>> GetClientes()
        {
            return await repo.GetClientes();
        }
        public async Task<Cliente?> GetClienteId(int id)
        {
            return await repo.GetClienteId(id);
        }
        public async Task<Cliente> CreateCliente(Cliente cliente)
        {
            return await repo.CreateCliente(cliente);
        }
        public async Task<Cliente?> UpdateCliente(int id, Cliente cliente)
        {
            return await repo.UpdateCliente(id, cliente);
        }
        public async Task<bool> DeleteCliente(int id)
        {
            return await repo.DeleteCliente(id);
        }
    }
}

using api.Models;

namespace api.Repositories
{
    public interface IClienteRepository
    {
        // GET → Obtener un cliente por nombre
        Task<Cliente?> GetCliente(string cliente);

        // GET → Obtener todos los clientes
        Task<List<Cliente>> GetClientes();

        // GET → Obtener por ID
        Task<Cliente?> GetClienteId(int id);

        // POST → Crear cliente
        Task<Cliente> CreateCliente(Cliente cliente);

        // PUT → Actualizar cliente
        Task<Cliente?> UpdateCliente(int id, Cliente cliente);

        // DELETE → Eliminar cliente
        Task<bool> DeleteCliente(int id);
    }
}

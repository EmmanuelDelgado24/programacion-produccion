using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class ClienteRepository : IClienteRepository
    {
        private readonly ApplicationDbContext context;

        public ClienteRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        // GET → Obtener un cliente por nombre
        public async Task<Cliente?> GetCliente(string cliente)
        {
           return await context.Clientes.FirstOrDefaultAsync(x => x.nombre == cliente);
        }

        // GET → Obtener todos los clientes
        public async Task<List<Cliente>> GetClientes()
        {
            return await context.Clientes.ToListAsync();
        }

        // GET → Obtener por ID
        public async Task<Cliente?> GetClienteId(int id)
        {
            return await context.Clientes.FindAsync(id);
        }

        // POST → Crear cliente

        public async Task<Cliente> CreateCliente(Cliente cliente)
        {
            context.Clientes.Add(cliente);
            await context.SaveChangesAsync();
            return cliente;
        }


        //PUT → Actualizar cliente
        public async Task<Cliente?> UpdateCliente(int id, Cliente cliente)
        {
            var existing = await context.Clientes.FindAsync(id);

            if (existing == null)
                return null;

            // Actualizar campos
            existing.ClienteId = cliente.ClienteId;
            existing.nombre = cliente.nombre;

            await context.SaveChangesAsync();
            return existing;
        }

        // DELETE → Eliminar cliente
        public async Task<bool> DeleteCliente(int id)
        {
            var existing = await context.Clientes.FindAsync(id);

            if (existing == null)
                return false;

            context.Clientes.Remove(existing);
            await context.SaveChangesAsync();
            return true;
        }
    }
}
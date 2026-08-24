using api.Data;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class PedidoRepository : IPedidoRepository
    {
        private readonly ApplicationDbContext context;

        public PedidoRepository(ApplicationDbContext context)
        {
            this.context = context;
        }
        public async Task<Pedido?> getPedido(string PedidoCliente)
        {
            return await context.Pedidos.FirstOrDefaultAsync(p => p.PedidoCliente == PedidoCliente);
        }

        public async Task<List<Pedido?>> getPedidos()
        {
            return await context.Pedidos
                .Include(p => p.Cliente)           // Esto trae el nombre "Coppel"
                .Include(p => p.DetallesNumeracion) // Esto trae las tallas
                //.FromSqlRaw(@"SELECT * FROM public.pedidos")
                .ToListAsync();
        }

        public async Task<Pedido> CreatePedido(Pedido pedido)
            {
                context.Pedidos.Add(pedido);
                await context.SaveChangesAsync();
                return pedido;
        }
    }
}

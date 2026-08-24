using api.Models;
using api.Repositories;

namespace api.Services
{
    public class PedidoService : IPedidoService
    {
        private readonly IPedidoRepository repo;

        public PedidoService(IPedidoRepository repo)
        {
            this.repo = repo;
        }

        public Task<Pedido?> getPedido(string PedidoCliente)
        {
            return repo.getPedido(PedidoCliente);
        }

        public Task<List<Pedido?>> getPedidos()
        {
            return repo.getPedidos();
        }

        public async Task<Pedido> CreatePedido(Pedido pedido) 
        {
            return await repo.CreatePedido(pedido);
        }
    }
}

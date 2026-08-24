using api.Models;

namespace api.Repositories
{
    public interface IPedidoRepository
    {
        Task<Pedido?> getPedido(string PedidoCliente);
        Task<List<Pedido?>> getPedidos();
        Task<Pedido> CreatePedido(Pedido pedido);
    }
}

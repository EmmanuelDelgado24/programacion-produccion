using api.Models;

namespace api.Services
{
    public interface IPedidoService
    {
        Task<Pedido?> getPedido(string PedidoCliente);
        Task<List<Pedido?>> getPedidos();
        Task<Pedido> CreatePedido(Pedido pedido);
    }
}

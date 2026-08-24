using api.Models;
using api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PedidoController : Controller
    {
        private readonly IPedidoService pedidoService;

        public PedidoController(IPedidoService pedidoService)
        { 
            this.pedidoService = pedidoService;
        }

        [HttpGet("pedidos")]
        public async Task<ActionResult<List<Pedido?>>> GetPedidos()
        {
            return Ok(await pedidoService.getPedidos());
        }

        // POST api/pedido
        [HttpPost("crearPedido")]
        //[FromBody] convierte el texto JSON del cuerpo de la solicitud en un objeto Pedido
        public async Task<ActionResult<Pedido>> CreatePedido([FromBody] Pedido pedido)
        {
            var created = await pedidoService.CreatePedido(pedido);
            return CreatedAtAction(nameof(GetPedidos), new { id = created.Id }, created);
        }
    }
}

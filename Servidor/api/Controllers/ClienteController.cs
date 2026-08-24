using api.Data;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using Microsoft.EntityFrameworkCore;
using api.Services;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ClienteController : ControllerBase
    {
        private readonly IClienteService clienteService;
        public ClienteController(IClienteService clienteService)
        {
            this.clienteService = clienteService;
        }

        // GET api/cliente
        [HttpGet]
        public async Task<ActionResult<List<Cliente>>> GetAll()
        {
            return Ok(await clienteService.GetClientes());
        }

        // GET api/cliente/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cliente>> GetClienteId(int id)
        {
            var cliente = await clienteService.GetClienteId(id);

            if (cliente == null)
                return NotFound();

            return Ok(cliente);
        }

        // GET api/[controller]/nombre/Coppel
        [HttpGet("nombre/{cliente}")]
        public async Task<ActionResult<Cliente>> GetCliente(string cliente)
        {
            var nombre = await clienteService.GetCliente(cliente);

            if (nombre == null)
                return NotFound();

            return Ok(nombre);
        }

        // POST api/cliente
        [HttpPost("crearCliente")]
        public async Task<ActionResult<Cliente>> CreateCliente([FromBody] Cliente cliente)
        {
            var created = await clienteService.CreateCliente(cliente);
            return CreatedAtAction(nameof(GetClienteId), new { id = created.ClienteId }, created);
        }

        [HttpPut("actualizarCliente/{id}")]
        public async Task<ActionResult<Cliente>> UpdateCliente(int id, [FromBody] Cliente cliente)
        {
            var updated = await clienteService.UpdateCliente(id, cliente);

            if (updated == null)
                return NotFound();

            return Ok(updated);
        }

        [HttpDelete("eliminarCliente/{id}")]
        public async Task<ActionResult> DeleteCliente(int id)
        {
            var deleted = await clienteService.DeleteCliente(id);

            if (!deleted)
                return NotFound();

            return NoContent();
        }
    }
}

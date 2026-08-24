using Microsoft.AspNetCore.Mvc;
using api.Services.ModelosService;

namespace api.Controllers.ModelosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class ModelosCoordinadoController : ControllerBase
    {
        private readonly CoordinadoService CoordinadoService;
        public ModelosCoordinadoController(CoordinadoService coordinadoService)
        {
            this.CoordinadoService = coordinadoService;
        }

        [HttpGet("coordinado")]
        public async Task<ActionResult> GetCoordinado()
        {
            var result = await CoordinadoService.GetModelosCoordinado();
            return Ok(result);
        }

        [HttpGet("modelo/{modelo}")]
        public async Task<ActionResult> GetPorEstilo(string modelo)
        {
            var result = await CoordinadoService.GetPorEstilo(modelo);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

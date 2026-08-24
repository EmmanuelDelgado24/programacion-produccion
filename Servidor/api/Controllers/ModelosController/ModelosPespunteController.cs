using api.Services.ModelosService;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.ModelosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class ModelosPespunteController : ControllerBase
    {
        private readonly PespunteService pespunteService;

        public ModelosPespunteController(PespunteService pespunteService)
        {
            this.pespunteService = pespunteService;
        }

        [HttpGet("pespunte")]
        public async Task<ActionResult> GetModelosPespunte()
        {
            var result = await pespunteService.GetModelosPespunte();
            return Ok(result);
        }

        [HttpGet("modelo/{modelo}")]
        public async Task<ActionResult> GetPorEstilo(string modelo)
        {
            var result = await pespunteService.GetPorEstilo(modelo);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

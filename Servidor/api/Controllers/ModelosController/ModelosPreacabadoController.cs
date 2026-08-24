using api.Services.ModelosService;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.ModelosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class ModelosPreacabadoController : ControllerBase
    {
        private readonly PreacabadoService preacabadoService;

        public ModelosPreacabadoController(PreacabadoService preacabadoService) 
        {
            this.preacabadoService = preacabadoService;
        }

        [HttpGet("preacabado")]
        public async Task<ActionResult> GetModelosPreacabado()
        {
            var result = await preacabadoService.GetModelosPreacabado();
            return Ok(result);
        }

        [HttpGet("modelo/{modelo}")]
        public async Task<ActionResult> GetPorEstilo(string modelo)
        {
            var result = await preacabadoService.GetPorEstilo(modelo);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

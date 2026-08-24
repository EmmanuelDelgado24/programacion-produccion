using api.Services.ModelosService;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.ModelosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class ModelosInyeccionController : ControllerBase
    {
        private readonly InyeccionService inyeccionService;

        public ModelosInyeccionController(InyeccionService inyeccionService) 
        {
            this.inyeccionService = inyeccionService;
        }

        [HttpGet("inyeccion")]
        public async Task<ActionResult> GetModelosInyeccion()
        {
            var result = await inyeccionService.GetModelosInyeccion();
            return Ok(result);
        }

        [HttpGet("modelo/{modelo}")]
        public async Task<ActionResult> GetPorEstilo(string modelo)
        {
            var result = await inyeccionService.GetPorEstilo(modelo);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

using api.Services.ModelosService;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.ModelosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class ModelosPlantillaController : ControllerBase
    {
        private readonly PlantillaService plantillaService;

        public ModelosPlantillaController(PlantillaService plantillaService) 
        {
            this.plantillaService = plantillaService;
        }

        [HttpGet("plantilla")]
        public async Task<ActionResult> GetModelosPlantilla()
        {
            var result = await plantillaService.GetModelosPlantilla();
            return Ok(result);
        }

        [HttpGet("modelo/{modelo}")]
        public async Task<ActionResult> GetPorEstilo(string modelo)
        {
            var result = await plantillaService.GetPorEstilo(modelo);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

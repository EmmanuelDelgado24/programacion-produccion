using api.Services.ModelosService;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.ModelosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class ModelosCorteController : ControllerBase
    {
        private readonly CorteService CorteService;
        public ModelosCorteController(CorteService corteService) 
        {
            this.CorteService = corteService;
        }

        [HttpGet("corte")]  
        public async Task<ActionResult> GetCorte()
        {
            var result = await CorteService.GetModelosCorte();
            return Ok(result);
        }

        [HttpGet("modelo/{modelo}")]
        public async Task<ActionResult> GetPorEstilo(string modelo)
        {
            var result = await CorteService.GetPorEstilo(modelo);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

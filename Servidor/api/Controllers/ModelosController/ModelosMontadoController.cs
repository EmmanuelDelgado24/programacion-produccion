using api.Data;
using api.Models;
using api.Services.ModelosService;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers.ModelosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class ModelosMontadoController : Controller
    {
        private readonly MontadoService montadoService;

        public ModelosMontadoController(MontadoService montadoService)
        {
            this.montadoService = montadoService;
        }
        [HttpGet("montado")]
        public async Task<ActionResult> GetModelosCorte()
        {
            var result = await montadoService.GetModelosMontados();
            return Ok(result);
        }

        [HttpGet("modelo/{modelo}")]
        public async Task<ActionResult> GetPorEstilo(string modelo)
        {
            var result = await montadoService.GetPorEstilo(modelo);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

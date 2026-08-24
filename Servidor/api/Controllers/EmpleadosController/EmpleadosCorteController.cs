using api.Services.EmpleadosService;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.EmpleadosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmpleadosCorteController : ControllerBase
    {
        private readonly EmpleadosCorteService empleadosCorteService;

        public EmpleadosCorteController(EmpleadosCorteService empleadosCorteService)
        {
            this.empleadosCorteService = empleadosCorteService;
        }

        [HttpGet("corte-hoy")]
        public async Task<IActionResult> GetCorteHoy()
        {
            var result = await empleadosCorteService.GetEmpleadosCorte();
            return Ok(result);
        }

        [HttpGet("clave/{clave}")]
        public async Task<IActionResult> GetCortePorClave(string clave)
        {
            var result = await empleadosCorteService.GetEmpleadoCorte(clave);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

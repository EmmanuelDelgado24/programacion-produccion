using api.Services.EmpleadosService;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.EmpleadosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmpleadosAdornoController : ControllerBase
    {
        private readonly EmpleadosAdornoService empleadosAdornoService;

        public EmpleadosAdornoController(EmpleadosAdornoService empleadosAdornoService)
        {
            this.empleadosAdornoService = empleadosAdornoService;
        }

        [HttpGet("adorno-hoy")]
        public async Task<IActionResult> GetAdornoHoy()
        {
            var result = await empleadosAdornoService.GetEmpleadosAdorno();
            return Ok(result);
        }

        [HttpGet("clave/{clave}")]
        public async Task<IActionResult> GetAdornoPorClave(string clave)
        {
            var result = await empleadosAdornoService.GetEmpleadoAdorno(clave);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

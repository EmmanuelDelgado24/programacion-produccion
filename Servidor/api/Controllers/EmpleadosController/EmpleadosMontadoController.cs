using api.Services.EmpleadosService;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.EmpleadosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmpleadosMontadoController : ControllerBase
    {
        private readonly EmpleadosMontadoService empleadosMontadoService;

        public EmpleadosMontadoController(EmpleadosMontadoService empleadosMontadoService)
        {
            this.empleadosMontadoService = empleadosMontadoService;
        }

        [HttpGet("montado-hoy")]
        public async Task<IActionResult> GetMontadoHoy()
        {
            var result = await empleadosMontadoService.GetEmpleadosMontado();
            return Ok(result);
        }

        [HttpGet("clave/{clave}")]
        public async Task<IActionResult> GetMontadoPorClave(string clave)
        {
            var result = await empleadosMontadoService.GetEmpleadoMontado(clave);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

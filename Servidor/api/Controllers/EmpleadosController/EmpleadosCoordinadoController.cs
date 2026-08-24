using api.Services.EmpleadosService;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;

namespace api.Controllers.EmpleadosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmpleadosCoordinadoController : ControllerBase
    {
        private readonly EmpleadosCoordinadoService empleadosCoordinadoService;
        public EmpleadosCoordinadoController(EmpleadosCoordinadoService empleadosCoordinadoService) 
        {
          this.empleadosCoordinadoService = empleadosCoordinadoService;
        }

        [HttpGet("coordinado-hoy")]
        public async Task<IActionResult> GetCoordinadoHoy()
        {
            var result = await empleadosCoordinadoService.GetEmpleadosCoordinado();
            return Ok(result);
        }

        [HttpGet("clave/{clave}")]
        public async Task<IActionResult> GetCoordinadoPorClave(string clave)
        {
            var result = await empleadosCoordinadoService.GetEmpleadoCoordinado(clave);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

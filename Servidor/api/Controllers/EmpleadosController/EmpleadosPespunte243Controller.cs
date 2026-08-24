using api.Services.EmpleadosService;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.EmpleadosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmpleadosPespunte243Controller : ControllerBase
    {
        private readonly EmpleadosPespunte243Service empleadosPespunte243Service;

        public EmpleadosPespunte243Controller(EmpleadosPespunte243Service empleadosPespunte243Service)
        {
            this.empleadosPespunte243Service = empleadosPespunte243Service;
        }

        [HttpGet("pespunte243-hoy")]
        public async Task<IActionResult> GetPespunte243Hoy()
        {
            var result = await empleadosPespunte243Service.GetEmpleadosPespunte243();
            return Ok(result);
        }

        [HttpGet("clave/{clave}")]
        public async Task<IActionResult> GetPespunte243PorClave(string clave)
        {
            var result = await empleadosPespunte243Service.GetEmpleadoPespunte243(clave);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

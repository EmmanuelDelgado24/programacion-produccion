using api.Services.EmpleadosService;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.EmpleadosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmpleadosPespunte242Controller : ControllerBase
    {
        private readonly EmpleadosPespunte242Service empleadosPespunte242Service;

        public EmpleadosPespunte242Controller(EmpleadosPespunte242Service empleadosPespunte242Service)
        {
            this.empleadosPespunte242Service = empleadosPespunte242Service;
        }

        [HttpGet("pespunte242-hoy")]
        public async Task<IActionResult> GetPespunte242Hoy()
        {
            var result = await empleadosPespunte242Service.GetEmpleadosPespunte242();
            return Ok(result);
        }

        [HttpGet("clave/{clave}")]
        public async Task<IActionResult> GetPespunte242PorClave(string clave)
        {
            var result = await empleadosPespunte242Service.GetEmpleadoPespunte244(clave);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

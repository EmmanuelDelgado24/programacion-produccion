using api.Services.EmpleadosService;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.EmpleadosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmpleadosPespunte244Controller : ControllerBase
    {
        private readonly EmpleadosPespunte244Service empleadosPespunte244Service;

        public EmpleadosPespunte244Controller(EmpleadosPespunte244Service empleadosPespunte244Service)
        {
            this.empleadosPespunte244Service = empleadosPespunte244Service;
        }

        [HttpGet("pespunte244-hoy")]
        public async Task<IActionResult> GetPespunte244Hoy()
        {
            var result = await empleadosPespunte244Service.GetEmpleadosPespunte244();
            return Ok(result);
        }

        [HttpGet("clave/{clave}")]
        public async Task<IActionResult> GetPespunte244PorClave(string clave)
        {
            var result = await empleadosPespunte244Service.GetEmpleadoPespunte244(clave);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

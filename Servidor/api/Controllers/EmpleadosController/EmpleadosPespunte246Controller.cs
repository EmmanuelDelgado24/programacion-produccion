using api.Services.EmpleadosService;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.EmpleadosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmpleadosPespunte246Controller : ControllerBase
    {
        private readonly EmpleadosPespunte246Service empleadosPespunte246Service;

        public EmpleadosPespunte246Controller(EmpleadosPespunte246Service empleadosPespunte246Service)
        {
            this.empleadosPespunte246Service = empleadosPespunte246Service;
        }

        [HttpGet("pespunte246-hoy")]
        public async Task<IActionResult> GetPespunte246Hoy()
        {
            var result = await empleadosPespunte246Service.GetEmpleadosPespunte246();
            return Ok(result);
        }

        [HttpGet("clave/{clave}")]
        public async Task<IActionResult> GetPespunte246PorClave(string clave)
        {
            var result = await empleadosPespunte246Service.GetEmpleadoPespunte246(clave);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

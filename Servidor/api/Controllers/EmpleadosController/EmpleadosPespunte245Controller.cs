using api.Services.EmpleadosService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.EmpleadosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmpleadosPespunte245Controller : ControllerBase
    {
        private readonly EmpleadosPespunte245Service empleadosPespunte245Service;

        public EmpleadosPespunte245Controller(EmpleadosPespunte245Service empleadosPespunte245Service)
        {
            this.empleadosPespunte245Service = empleadosPespunte245Service;
        }

        [HttpGet("pespunte245-hoy")]
        public async Task<IActionResult> GetPespunte245Hoy()
        {
            var result = await empleadosPespunte245Service.GetEmpleadosPespunte245();
            return Ok(result);
        }

        [HttpGet("clave/{clave}")]
        public async Task<IActionResult> GetPespunte245PorClave(string clave)
        {
            var result = await empleadosPespunte245Service.GetEmpleadoPespunte245(clave);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}

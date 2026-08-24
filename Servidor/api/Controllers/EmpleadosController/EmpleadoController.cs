using api.Data;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using Microsoft.EntityFrameworkCore;
using api.DTOs;
using api.Services.EmpleadosService;

namespace api.Controllers.EmpleadosController
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmpleadoController : ControllerBase
    {
        private readonly EmpleadosGeneralService empleadosGeneralService;
        public EmpleadoController(EmpleadosGeneralService empleadosGeneralService)
        {
            this.empleadosGeneralService = empleadosGeneralService;
        }

        [HttpGet("general-hoy")]
        public async Task<ActionResult> GetGeneralHoy()
        {
            var result = await empleadosGeneralService.GetEmpleadosGeneral();
            return Ok(result);
        }

        [HttpGet("clave/{clave}")]
        public async Task<ActionResult<Empleado>> GetEmpleadoPorClave(string clave)
        {
            var result = await empleadosGeneralService.GetEmpleadoGeneral(clave);

            if (result == null)
                return NotFound();

            return Ok(result);
        }
    }
}
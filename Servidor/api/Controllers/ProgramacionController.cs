using api.Models;
using api.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProgramacionController : ControllerBase
    {
        private readonly ProgramacionService programacionService;

        public ProgramacionController(ProgramacionService programacionService)
        {
            this.programacionService = programacionService;
        }

        [HttpGet("semana/{semana}")]
        public async Task<ActionResult> GetSemana(int semana)
        {
            var result = await programacionService.GetSemana(semana);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpGet("departamento/{departamento}")]
        public async Task<ActionResult> GetDepartamento(string departamento)
        {
            var result = await programacionService.GetDepartamento(departamento);

            if (result == null)
                return NotFound();

            return Ok(result);
        }

        [HttpGet("modelo/{modelo}")]
        public async Task<ActionResult> GetModelo(int modelo)
        {
            var result = await programacionService.GetModelo(modelo);

            if (result == null)
                return NotFound();

            return Ok(result);

        }

        [HttpGet("programacion")]
        public async Task<ActionResult> GetProgramacion()
        {
            var result = await programacionService.GetProgramacion();
            return Ok(result);
        }

        [HttpPost("CrearProgramacion")]
        public async Task<ActionResult<IEnumerable<Programacion>>> CrearProgramacion([FromBody] List<Programacion> programaciones) 
        {
            // Validamos que la lista no venga vacía
            if (programaciones == null || !programaciones.Any())
            {
                return BadRequest("La lista de programación no contiene elementos.");
            }
            var crearlista = await programacionService.CrearProgramacion(programaciones);

            return Ok(crearlista);
        }
    }
}

using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories
{
    public class ProgramacionRepository : IProgramacionRepository
    {
        private readonly ApplicationDbContext context;
        public ProgramacionRepository(ApplicationDbContext context) 
        {
            this.context = context;
        }
        
        public async Task<Programacion> GetSemana(int semana) 
        {
            return await context.Programacion.FirstOrDefaultAsync(x => x.Semana == semana);
        }

        public async Task<Programacion> GetDepartamento(string departamento)
        {
            return await context.Programacion.FirstOrDefaultAsync(x => x.Departamento != null && x.Departamento == departamento);
        }

        public async Task<Programacion> GetModelo(int modelo)
        {
            return await context.Programacion.FirstOrDefaultAsync(x => x.Modelo == modelo);
        }
        public async Task<List<Programacion?>> GetProgramacion() 
        {
            return await context.Programacion
                  .Include(p => p.DetallesNumeracion)
                  .ToListAsync();
        }

        // POST → Crear programacion
        public async Task<List<Programacion>> CrearProgramacion(List<Programacion> programaciones)
        {
            context.Programacion.AddRangeAsync(programaciones);
            await context.SaveChangesAsync();
            return programaciones;
        }

        //PUT → Actualizar cliente
        public async Task<Programacion?> UpdateProgramacion(int idPedido, Programacion programacion)
        {
            var existing = await context.Programacion.FindAsync(idPedido);

            if (existing == null)
                return null;

            // Actualizar campos
            existing.IdPedido = programacion.IdPedido;
            existing.Cliente = programacion.Cliente;
            existing.Semana = programacion.Semana;
            existing.Departamento = programacion.Departamento;
            existing.Linea = programacion.Linea;
            existing.Dia = programacion.Dia;
            existing.Modelo = programacion.Modelo;
            existing.DemandaDia = programacion.DemandaDia;
            existing.Personal = programacion.Personal;
            existing.MinutosDispo = programacion.MinutosDispo;
            existing.TiempoEst = programacion.TiempoEst;
            existing.CapacidadDia = programacion.CapacidadDia;
            existing.CargaDia = programacion.CargaDia;
            existing.Saturacion = programacion.Saturacion;
            existing.CapacidadReal = programacion.CapacidadReal;
            existing.ProgramacionIdeal = programacion.ProgramacionIdeal;
            existing.Deficit = programacion.Deficit;


            await context.SaveChangesAsync();
            return existing;
        }

        // DELETE → Eliminar cliente
        public async Task<bool> DeleteProgramacion(string departamento)
        {
            var existing = await context.Programacion.FindAsync(departamento);

            if (existing == null)
                return false;

            context.Programacion.Remove(existing);
            await context.SaveChangesAsync();
            return true;
        }
    }
}

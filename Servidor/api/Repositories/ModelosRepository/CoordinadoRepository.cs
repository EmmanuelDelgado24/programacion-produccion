using api.Data;
using api.Models.Modelos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.ModelosRepository
{
    public class CoordinadoRepository: ICoordinadoRepository
    {
        private readonly ApplicationDbContext context;

        public CoordinadoRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<ModelosCoordinado?> GetModelosCoordinado(string modelo)
        {
            return await context.ModelosCoordinado.FirstOrDefaultAsync(x => x.modelo == modelo);      
        }

        public async Task<List<ModelosCoordinado>> GetModelosCoordinado()
        {
            return await context.ModelosCoordinado
                .FromSqlRaw(@"SELECT* FROM public.modelos_coordinado")
                .ToListAsync();
        }
    }
}

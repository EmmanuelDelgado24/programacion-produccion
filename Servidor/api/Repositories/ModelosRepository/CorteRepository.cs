using api.Data;
using api.Models.Modelos;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.ModelosRepository
{
    public class CorteRepository : ICorteRepository
    {
        private readonly ApplicationDbContext context;

        public CorteRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<ModelosCorte?> GetModelosCorte(string modelo)
        {
            return await context.ModelosCorte
                .FirstOrDefaultAsync(x => x.modelo == modelo);
        
        }
        public async Task<List<ModelosCorte?>> GetModelosCorte()
        {
            return await context.ModelosCorte
                .FromSqlRaw(@"SELECT* FROM public.modelos_corte")
                .ToListAsync();
        }
    }
 }

using api.Data;
using api.Models.Modelos;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.ModelosRepository
{
    public class MontadoRepository : IMontadoRepository
    {
        private readonly ApplicationDbContext context;

        public MontadoRepository(ApplicationDbContext context)
        {
            this.context = context;
        }

        public async Task<ModelosMontado?> GetModelosMontados(string modelo)
        {
            return await context.ModelosMontado.FirstOrDefaultAsync(x => x.modelo == modelo);
        }

        public async Task<List<ModelosMontado?>> GetModelosMontados()
        {
            return await context.ModelosMontado
                .FromSqlRaw(@"SELECT* FROM public.modelos_montado")
                .ToListAsync();
        }
    }
}

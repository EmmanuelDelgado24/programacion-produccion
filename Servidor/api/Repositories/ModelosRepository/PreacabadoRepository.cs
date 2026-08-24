using api.Data;
using api.Models.Modelos;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.ModelosRepository
{
    public class PreacabadoRepository : IPreacabadoRepository
    {
        private readonly ApplicationDbContext context;

        public PreacabadoRepository(ApplicationDbContext context) 
        {
            this.context = context;
        }

        public async Task<ModelosPreacabado?> GetModelosPreacabado(string modelo)
        {
            return await context.ModelosPreacabado.FirstOrDefaultAsync(x => x.modelo == modelo);
        }

        public async Task<List<ModelosPreacabado?>> GetModelosPreacabado()
        {
            return await context.ModelosPreacabado
               .FromSqlRaw(@"SELECT* FROM public.modelos_preacabado")
               .ToListAsync();
        }
    }
}
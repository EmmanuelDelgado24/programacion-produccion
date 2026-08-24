using api.Data;
using api.Models.Modelos;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.ModelosRepository
{
    public class PespunteRepository : IPespunteRepository
    {
        private readonly ApplicationDbContext context;

        public PespunteRepository(ApplicationDbContext context) 
        {
            this.context = context;
        }

        public async Task<ModelosPespunte?> GetModelosPespunte(string modelo)
        {
            return await context.ModelosPespunte.FirstOrDefaultAsync(x => x.modelo == modelo);
        }

        public async Task<List<ModelosPespunte?>> GetModelosPespunte()
        {
            return await context.ModelosPespunte
                .FromSqlRaw(@"SELECT* FROM public.modelos_pespunte")
                .ToListAsync();
        }
    }
}

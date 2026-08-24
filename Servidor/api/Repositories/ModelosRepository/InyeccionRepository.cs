using api.Data;
using api.Models.Modelos;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.ModelosRepository
{
    public class InyeccionRepository : IInyeccionRepository
    {
        private readonly ApplicationDbContext context;

        public InyeccionRepository(ApplicationDbContext context) 
        {
            this.context = context;
        }

        public async Task<ModelosInyeccion?> GetModelosInyeccion(string modelo)
        {
            return await context.ModelosInyeccion.FirstOrDefaultAsync(x => x.modelo == modelo);
        }

        public async Task<List<ModelosInyeccion?>> GetModelosInyeccion()
        {
            return await context.ModelosInyeccion
                .FromSqlRaw(@"SELECT* FROM public.modelos_inyeccion")
                .ToListAsync();
        }
    }
}

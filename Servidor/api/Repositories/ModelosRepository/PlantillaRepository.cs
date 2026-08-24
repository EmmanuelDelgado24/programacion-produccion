using api.Data;
using api.Models.Modelos;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.ModelosRepository
{
    public class PlantillaRepository : IPlantillaRepository
    {
        private readonly ApplicationDbContext context;

        public PlantillaRepository(ApplicationDbContext context) 
        {
            this.context = context;
        }

        public async Task<ModelosPlantilla?> GetModelosPlantilla(string modelo) 
        {
            return await context.ModelosPlantilla.FirstOrDefaultAsync(x => x.modelo == modelo);
        }

        public async Task<List<ModelosPlantilla?>> GetModelosPlantilla() 
        {
            return await context.ModelosPlantilla
                .FromSqlRaw(@"SELECT* FROM public.modelos_plantilla")
                .ToListAsync();
        }
    }
}

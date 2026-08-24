using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.EmpleadosRespository
{
    public class EmpleadosMontadoRepository : IEmpleadosMontadoRepository
    {
        private readonly AppDbContextSqlServer context;

        public EmpleadosMontadoRepository(AppDbContextSqlServer context) 
        {
            this.context = context;
        }

        public async Task<Empleado?> GetEmpleadoMontado(string clave)
        {
            return await context.Empleados.FirstOrDefaultAsync(x => x.clave == clave);
        }

        public async Task<List<Empleado>> GetEmpleadosMontado()
        {
            return await context.Empleados
                .FromSqlRaw(@"
                    SELECT
                        l.clave,
                        l.registro,
                        l.UltimoEStatus,
                        l.descarga,
                        e.nombre,
                        e.apellidopaterno,
                        e.apellidomaterno,
                        e.email,
                        e.departamento,
                        e.fechacumple,
                        e.puesto,
                        e.fechaalta,
	                    COUNT(*) OVER() AS TotalRegistros
                     FROM dbo.logstcpip AS l
                     INNER JOIN dbo.empleados AS e
                            ON l.clave = e.clave
	
                     WHERE CAST(l.registro AS date) = CAST(GETDATE() AS date) 
	                   AND l.UltimoEStatus IN('ENTRADA DEL TURNO')
	                   AND e.departamento IN ('PROD ML6')
                ")
                .ToListAsync();
        }
    }
}

using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.EmpleadosRespository
{
    public class EmpleadosCorteRepository: IEmpleadosCorteRepository
    {
        private readonly AppDbContextSqlServer context;

        public EmpleadosCorteRepository(AppDbContextSqlServer context)
        {
            this.context = context;
        }

        public async Task<Empleado?> GetEmpleadoCorte(string clave)
        {
            return await context.Empleados.FirstOrDefaultAsync(x => x.clave == clave);

        }

        public async Task<List<Empleado>> GetEmpleadosCorte()
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
	                   AND e.departamento IN ('PROD CD', 'PROD CT212', 'PROD CT213', 'PROD CT214', 'PROD CT215')
                ")
                .ToListAsync();
        }
    }
}

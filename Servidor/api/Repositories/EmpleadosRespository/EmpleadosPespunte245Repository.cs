using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.EmpleadosRespository
{
    public class EmpleadosPespunte245Repository : IEmpleadosPespunte245Repository
    {
        private readonly AppDbContextSqlServer context;

        public EmpleadosPespunte245Repository(AppDbContextSqlServer context)
        {
            this.context = context;
        }

        public async Task<Empleado?> GetEmpleadoPespunte245(string clave)
        {
            return await context.Empleados.FirstOrDefaultAsync(e => e.clave == clave);
        }

        public async Task<List<Empleado>> GetEmpleadosPespunte245()
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
	                   AND e.departamento IN ('PROD PB245')
                ")
                .ToListAsync();
        }
    }
}

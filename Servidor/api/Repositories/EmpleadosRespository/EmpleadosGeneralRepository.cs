using api.Data;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repositories.EmpleadosRespository
{
    public class EmpleadosGeneralRepository : IEmpleadosGeneralRepository
    {
        private readonly AppDbContextSqlServer context;

        public EmpleadosGeneralRepository(AppDbContextSqlServer context)
        {
            this.context = context;
        }

        public async Task<Empleado?> GetEmpleadoGeneral(string clave)
        {
            return await context.Empleados.FirstOrDefaultAsync(x => x.clave == clave);
        }
        public async Task<List<Empleado>> GetEmpleadosGeneral()
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
	                        COUNT(*) OVER() AS totalRegistros
                        FROM dbo.logstcpip AS l
                        INNER JOIN dbo.empleados AS e
                            ON l.clave = e.clave
	
                        WHERE CAST(l.registro AS date) = CAST(GETDATE() AS date) 
	                      AND l.UltimoEStatus IN('ENTRADA DEL TURNO', 'ENTRADA DEL TURNO FALTA', 'ENTRADA DEL TURNO RETARDO', 'REGISTRO INVALIDO')
	                      AND e.departamento IN ('PROD CD', 'PROD CT212', 'PROD CT213', 'PROD CT214', 'PROD CT215',  
	                                             'PROD CD221', 'PROD CD222', 'PROD CD223','PROD CD224',
	                                             'PROD PB242', 'PROD PB243', 'PROD PB244', 'PROD PB245', 'PROD PB246', 
			     		                         'PROD ML6', 'PROD AL6')
                 ")
                .ToListAsync();
        } 
    }
}

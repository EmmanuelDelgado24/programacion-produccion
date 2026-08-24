using api.Data;

namespace api.Services
{
    public class ReporteService
    {
        private readonly AppDbContextSqlServer _dbServer;
        private readonly ApplicationDbContext _dbPostgres;

        public ReporteService(AppDbContextSqlServer dbServer, ApplicationDbContext dbPostgres)
        {
            _dbServer = dbServer;
            _dbPostgres = dbPostgres;

        }

    }
}

using api.Data;
using api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [ApiController]
    [Route("api/registros")]
    public class LogTcpIpController : ControllerBase
    {
       private readonly AppDbContextSqlServer context;
       public LogTcpIpController(AppDbContextSqlServer context)
       {
            this.context = context;
       }

       public async Task<IEnumerable<LogTcpIp>> Get() 
       {
            return await context.LogsTcpIp.ToListAsync();
       } 
    }
}

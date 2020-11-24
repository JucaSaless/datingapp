using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OnController : ControllerBase
    {
        private readonly ILogger<string> _logger;

        public OnController(ILogger<string> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<string> Index()
        {
            return "Connected to Api";
        }
    }
}

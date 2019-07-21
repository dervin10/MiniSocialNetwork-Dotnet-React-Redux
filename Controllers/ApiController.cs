using System;
using Microsoft.AspNetCore.Mvc;

namespace CrashCourseUPRB_v2.Controllers 
{    public class ApiController : ControllerBase
    {
        [HttpGet("api/time")]
        public IActionResult Get() 
        {
            return Ok(new { time = DateTime.Now.ToString()} );
        }
    }
}
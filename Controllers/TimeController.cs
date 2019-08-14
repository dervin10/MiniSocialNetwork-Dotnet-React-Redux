using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CrashCourseUPRB_v2.Repository;

namespace CrashCourseUPRB_v2
{
    public class TimeController : ControllerBase
    {

        [HttpGet("api/time")]
        public IActionResult Time()
        {
            Console.WriteLine("Something.");
            return Ok(new { time = DateTime.Now.ToString() });
        }
    }
}
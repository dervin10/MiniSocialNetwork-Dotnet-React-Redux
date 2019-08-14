using System;
using System.Threading.Tasks;
using System.IO;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using CrashCourseUPRB_v2.Repository;
using CrashCourseUPRB_v2.Model;

namespace CrashCourseUPRB_v2.Controllers
{
    [Route("[controller]/post")]
    public class ApiController : ControllerBase
    {
        private readonly IPostRepository _postRepo;

        public ApiController(IPostRepository postRepository)
        {
            _postRepo = postRepository;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return new ObjectResult(await _postRepo.GetAllPosts());
        }

        [HttpPost]
        public async Task<IActionResult> Post()
        {
            using (StreamReader stream = new StreamReader(HttpContext.Request.Body))
            {
                string body = stream.ReadToEnd();
                dynamic bodySer = JsonConvert.DeserializeObject(body);
                // body = "param=somevalue&param2=someothervalue"
                Console.WriteLine(bodySer.message);
                await _postRepo.Create(new Post { ID = "", Name = "test", Content = bodySer.message });
            }
            return new ObjectResult(await _postRepo.GetAllPosts());
        }


    }
}
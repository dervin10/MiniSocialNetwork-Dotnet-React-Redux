using System.Collections.Generic;
using System.Threading.Tasks;
using CrashCourseUPRB_v2.Model;

namespace CrashCourseUPRB_v2.Repository
{

    public interface IPostRepository
    {
        Task<IEnumerable<Post>> GetAllPosts();
        Task Create(Post post);



    }
}
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CrashCourseUPRB_v2.Model;
using MongoDB.Driver;
using MongoDB.Bson;

namespace CrashCourseUPRB_v2.Repository
{
    public class PostRepository : IPostRepository
    {
        private readonly IMongoDBContext _context;

        public PostRepository(IMongoDBContext db)
        {
            _context = db;
        }

        public async Task<IEnumerable<Post>> GetAllPosts()
        {
            return await _context.Posts.Find(_ => true).ToListAsync();
        }

        public async Task Create(Post post)
        {
            await _context.Posts.InsertOneAsync(post);
        }
    }
}
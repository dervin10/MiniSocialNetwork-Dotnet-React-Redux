using Microsoft.Extensions.Options;
using MongoDB.Driver;
using CrashCourseUPRB_v2.Model;

namespace CrashCourseUPRB_v2.Model
{
    public class MongoDBContext : IMongoDBContext
    {

        // "ConnectionString": "mongodb://dervinUser:12345@localhost",
        private readonly IMongoDatabase _context;

        public MongoDBContext(IOptions<Settings> options, IMongoClient client)
        {
            _context = client.GetDatabase(options.Value.Database);
        }

        public IMongoCollection<Post> Posts => _context.GetCollection<Post>("Posts");
    }
}
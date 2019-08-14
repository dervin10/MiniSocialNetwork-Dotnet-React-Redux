using System;
using MongoDB.Driver;

namespace CrashCourseUPRB_v2.Model
{
    public interface IMongoDBContext
    {
        IMongoCollection<Post> Posts { get; }
    }

}
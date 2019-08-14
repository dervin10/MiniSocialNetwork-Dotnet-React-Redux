using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace CrashCourseUPRB_v2.Model
{
    [BsonIgnoreExtraElements]
    public class Post
    {
        [BsonElement(elementName: "id")]
        public string ID { get; set; }

        [BsonElement(elementName: "name")]
        public string Name { get; set; }

        [BsonElement(elementName: "time")]
        public DateTime Time { get; set; }

        [BsonElement(elementName: "content")]
        public string Content { get; set; }
    }

}
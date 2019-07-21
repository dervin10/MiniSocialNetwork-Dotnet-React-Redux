using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;

namespace CrashCourseUPRB_v2
{
    public class MyHub : Hub
    {
        static List<Post> posts = new List<Post>()
        {
            new Post{ ID = "1", Name = "Dervin", Time = DateTime.Now, Content = "This is a Post" },
            new Post{ ID = "2", Name = "Jose", Time = DateTime.Now, Content = "This is a Post" }
        };

        // <ID, NAME>
        static List<Online> onlines = new List<Online>()
        {
            new Online{ ID = "1", Name = "Dervin"},
            new Online{ ID = "2", Name = "Jose"}
        };

        static List<Notification> notification = new List<Notification>
        {
            new Notification{ ID = "1", Information = "logged in...", Name = "Dervin"},
            new Notification{ ID = "2", Information = "logged in...", Name = "Jose"}
        };

        private static readonly string GroupSocial = "SOCIALNETWORK";

        // Testing Purposes
        public async Task Testing(string message)
        {
            await Clients.All.SendAsync("TestRecieve",
            Context.User.Claims.ToString());
        }

        // Fitst time connected...
        public async Task GetFirstTimePost(string username)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, GroupSocial);

            onlines.Add(new Online { ID = Context.ConnectionId, Name = username });
            notification.Add(new Notification { ID = Context.ConnectionId, Name = username, Information = "Logged in..." });

            await Clients.Caller.SendAsync("GetFirstTimePost", JsonConvert.SerializeObject(posts));
            await Clients.All.SendAsync("Onlines", JsonConvert.SerializeObject(onlines));
            await Clients.All.SendAsync("Notifications", JsonConvert.SerializeObject(notification));
        }

        public async Task AddPost(object message)
        {
            await Clients.All.SendAsync("NewPost", posts.ToArray());
        }

        public async override Task OnConnectedAsync()
        {
            // onlines.Add(Context.ConnectionId, )
        }

        public async override Task OnDisconnectedAsync(Exception exception)
        {
            Console.WriteLine(exception);
            onlines.RemoveAll(onlines => onlines.ID.Equals(Context.ConnectionId));
            notification.RemoveAll(notification => notification.ID.Equals(Context.ConnectionId));
            await Clients.All.SendAsync("Onlines", JsonConvert.SerializeObject(onlines));
            await Clients.All.SendAsync("Notifications", JsonConvert.SerializeObject(notification));
        }

        public string GetOnline()
        {
            return JsonConvert.SerializeObject(onlines);
        }
    }

    public class Post
    {
        public string ID { get; set; }
        public string Name { get; set; }
        public DateTime Time { get; set; }
        public string Content { get; set; }
    }

    public class Online
    {
        public string ID { get; set; }
        public string Name { get; set; }
    }

    public class Notification
    {
        public string ID { get; set; }
        public string Information { get; set; }
        public string Name { get; set; }
    }
}
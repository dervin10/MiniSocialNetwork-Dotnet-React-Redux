using System;
using System.Linq;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using CrashCourseUPRB_v2.Model;

namespace CrashCourseUPRB_v2
{
    public class MyHub : Hub
    {
        static Queue<Post> posts = new Queue<Post>();

        static Queue<Online> onlines = new Queue<Online>();

        static Queue<Notification> notification = new Queue<Notification>();

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

            onlines.Enqueue(new Online { ID = Context.ConnectionId, Name = username });
            notification.Enqueue(new Notification { ID = Context.ConnectionId, Name = username, Information = "Logged in..." });

            await Clients.Caller.SendAsync("GetFirstTimePost", JsonConvert.SerializeObject(posts));
            await Clients.All.SendAsync("Onlines", JsonConvert.SerializeObject(onlines));
            await Clients.All.SendAsync("Notifications", JsonConvert.SerializeObject(notification));
        }

        // public async Task Post(object message)
        // {
        //     var username = onlines.Find(online => online.ID == Context.ConnectionId).Name;
        //     posts.Enqueue(new Post { ID = Context.ConnectionId, Name = username, Content = message.ToString(), Time = new DateTime() });
        //     notification.Enqueue(new Notification { ID = Context.ConnectionId, Name = username, Information = " has posted." });
        //     await Clients.All.SendAsync("Post", JsonConvert.SerializeObject(posts.Reverse()));
        //     await Clients.All.SendAsync("Notifications", JsonConvert.SerializeObject(notification.Reverse()));
        // }

        public async override Task OnConnectedAsync()
        {
            // onlines.Add(Context.ConnectionId, )
        }

        public async override Task OnDisconnectedAsync(Exception exception)
        {
            var onlineList = onlines.ToList().RemoveAll(onlines => onlines.ID.Equals(Context.ConnectionId));
            onlines = new Queue<Online>(onlineList);
            var notificationList = notification.ToList().RemoveAll(notification => notification.ID.Equals(Context.ConnectionId));
            notification = new Queue<Notification>(notificationList);
            await Clients.All.SendAsync("Onlines", JsonConvert.SerializeObject(onlines));
            await Clients.All.SendAsync("Notifications", JsonConvert.SerializeObject(notification));
        }

        public string GetOnline()
        {
            return JsonConvert.SerializeObject(onlines);
        }

        public static T RemoveSpecific<T>(string id, Queue<T> list)
        {
            T result = default(T);

            return result;
        }
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
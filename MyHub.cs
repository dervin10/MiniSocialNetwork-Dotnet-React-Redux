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

            await Clients.All.SendAsync("Onlines", JsonConvert.SerializeObject(onlines));
            await Clients.All.SendAsync("Notifications", JsonConvert.SerializeObject(notification));
        }

        public async Task UserPosted(string username)
        {
            notification.Enqueue(new Notification { ID = Context.ConnectionId, Name = username, Information = "has posted..." });
            await Clients.All.SendAsync("Notifications", JsonConvert.SerializeObject(notification));
        }

        public async override Task OnDisconnectedAsync(Exception exception)
        {
            onlines = RemoveSpecificOnline(Context.ConnectionId);
            notification = RemoveSpecificNotification(Context.ConnectionId);

            await Clients.All.SendAsync("Onlines", JsonConvert.SerializeObject(onlines));
            await Clients.All.SendAsync("Notifications", JsonConvert.SerializeObject(notification));
        }

        public static Queue<Online> RemoveSpecificOnline(string id)
        {
            Queue<Online> temp = new Queue<Online>();

            while (onlines.Count > 0)
            {
                Online hold = onlines.Dequeue();
                if (hold.ID != id)
                    temp.Enqueue(hold);
            }
            return temp;
        }

        public static Queue<Notification> RemoveSpecificNotification(string id)
        {
            Queue<Notification> temp = new Queue<Notification>();

            while (notification.Count > 0)
            {
                Notification hold = notification.Dequeue();
                if (hold.ID != id)
                    temp.Enqueue(hold);
            }
            return temp;
        }
    }
}
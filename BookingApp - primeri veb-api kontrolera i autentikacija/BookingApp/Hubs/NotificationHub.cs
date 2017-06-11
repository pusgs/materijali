using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.UI;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace BookingApp.Hubs
{
    //[Authorize(Roles = "Admin, Manager")]
    [HubName("notifications")]
    public class NotificationHub : Hub
    {
        private static IHubContext hubContext = GlobalHost.ConnectionManager.GetHubContext<NotificationHub>();

        public void Hello()
        {
            Clients.All.hello("Hello from server");
        }

        public static void Notify(int clickCount)
        {
            hubContext.Clients.Group("Admins").clickNotification($"Kliknuto je: {clickCount} puta");
        }

        public override Task OnConnected()
        {
            //Ako vam treba pojedinacni User
            //var identityName = Context.User.Identity.Name;

            Groups.Add(Context.ConnectionId, "Admins");

            if (Context.User.IsInRole("Admin"))
            {
                
            }

            return base.OnConnected();
        }

        public override Task OnDisconnected(bool stopCalled)
        {
            Groups.Remove(Context.ConnectionId, "Admins");

            if (Context.User.IsInRole("Admin"))
            {
                
            }
            return base.OnDisconnected(stopCalled);
        }
    }
}
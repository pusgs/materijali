using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using BookingApp.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;

namespace BookingApp.Controllers
{   
    [RoutePrefix("api")]
    public class WA2AppUsersController : ApiController
    {
        private BAContext db = new BAContext();


        //User manager -> We will use it to check role if needed.
        private ApplicationUserManager _userManager;

        public ApplicationUserManager UserManager
        {
            get
            {
                return _userManager ?? Request.GetOwinContext().GetUserManager<ApplicationUserManager>();
            }
            private set
            {
                _userManager = value;
            }
        }


        /*
            IdentityResult result = UserManager.Create(usr);
            await UserManager.AddToRoleAsync(usr.Id, "User");

            if (!result.Succeeded)
            {
                return BadRequest();
            }
        */

        [Authorize(Roles = "Admin")]
        [HttpGet]
        [Route("AppUsersWA2")]
        public IQueryable<AppUser> m1()
        {
            return db.AppUsers;
        }

        [HttpGet]
        [Route("AppUsersWA2/{id}")]
        //[ResponseType(typeof(AppUser))]
        public IHttpActionResult m2(int id)
        {   
            bool isAdmin = UserManager.IsInRole(User.Identity.Name, "Admin");//User.Identity.Name => Username Identity User-a! UserManager trazi po njegovom username-u, i onda poredi! 
            var user = db.Users.FirstOrDefault(u => u.UserName == User.Identity.Name);//Vadimo iz Identity baze po username-u Identity User-a, koji u sebi sadrzi AppUser-a!
            if (isAdmin || (user != null && user.appUserId.Equals(id)))//Ako korisnik nije admin, i nije AppUser koji trazi podatke o sebi, nije autorizovan!
            {
                AppUser appUser = db.AppUsers.Find(id);
                if (appUser == null)
                {
                    return NotFound();
                }

                return Ok(appUser);
            }

            return Unauthorized();
        }

        [Authorize]
        [HttpPut]
        [Route("AppUsersWA2/{id}")]
        [ResponseType(typeof(void))]
        public IHttpActionResult m3(int id, AppUser appUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != appUser.Id)
            {
                return BadRequest();
            }

            db.Entry(appUser).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppUserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [HttpPost]
        [Route("AppUsersWA2")]
        [ResponseType(typeof(AppUser))]
        public IHttpActionResult m4(AppUser appUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AppUsers.Add(appUser);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = appUser.Id }, appUser);
        }

        [HttpDelete]
        [Route("AppUsersWA2/{id}")]
        [ResponseType(typeof(AppUser))]
        public IHttpActionResult m5(int id)
        {
            AppUser appUser = db.AppUsers.Find(id);
            if (appUser == null)
            {
                return NotFound();
            }

            db.AppUsers.Remove(appUser);
            db.SaveChanges();

            return Ok(appUser);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AppUserExists(int id)
        {
            return db.AppUsers.Count(e => e.Id == id) > 0;
        }
    }
}
 
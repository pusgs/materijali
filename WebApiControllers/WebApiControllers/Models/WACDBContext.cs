using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace WebApiControllers.Models
{
    public class WACDBContext : DbContext
    {   
        public DbSet<Product> Products { get; set; }
        public WACDBContext() : base("Testest")
        {
            
        }
    }
}
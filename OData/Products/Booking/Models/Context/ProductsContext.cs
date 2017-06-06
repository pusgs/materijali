using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Booking.Models.Context
{
    public class ProductsContext : DbContext
    {
        public DbSet<ProductCategory> ProductCategories { get; set; }
        public DbSet<Product> Products { get; set; }

        public ProductsContext() : base("name=BookingContext")
        {

        }
    }
}
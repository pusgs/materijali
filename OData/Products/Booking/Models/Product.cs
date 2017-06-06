using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Booking.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public ProductCategory ProductCategory { get; set; }
    }
}
using Newtonsoft.Json;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Booking.Models
{
    public class ProductCategory
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection Products { get; set; }
    }
}
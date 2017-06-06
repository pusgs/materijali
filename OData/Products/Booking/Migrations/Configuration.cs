namespace Booking.Migrations
{
    using Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Booking.Models.Context.ProductsContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Booking.Models.Context.ProductsContext context)
        {
            var productCategories = new List<ProductCategory>()
            {
                new ProductCategory() {Id = 1, Name = "Product Cat 1" },
                new ProductCategory() {Id = 2, Name = "Product Cat 2" },
                new ProductCategory() {Id = 3, Name = "Product Cat 3" }
            };

            var products = new List<Product>()
            {
                new Product() {Id = 1, Name = "Product 1", Price = 11, ProductCategory = productCategories[0] },
                new Product() {Id = 2, Name = "Product 2", Price = 22, ProductCategory = productCategories[1] },
                new Product() {Id = 3, Name = "Product 3", Price = 33, ProductCategory = productCategories[2] }
            };

            context.Products.AddRange(products);
        }
    }
}

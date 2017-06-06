using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Http.OData;
using System.Web.Http.OData.Routing;
using Booking.Models;
using Booking.Models.Context;

namespace Booking.Controllers
{
    /*
    The WebApiConfig class may require additional changes to add a route for this controller. Merge these statements into the Register method of the WebApiConfig class as applicable. Note that OData URLs are case sensitive.

    using System.Web.Http.OData.Builder;
    using System.Web.Http.OData.Extensions;
    using Booking.Models;
    ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
    builder.EntitySet<ProductCategory>("ProductCategories");
    config.Routes.MapODataServiceRoute("odata", "odata", builder.GetEdmModel());
    */
    public class ProductCategoriesController : ODataController
    {
        private ProductsContext db = new ProductsContext();

        // GET: odata/ProductCategories
        [EnableQuery]
        public IQueryable<ProductCategory> GetProductCategories()
        {
            return db.ProductCategories;
        }

        // GET: odata/ProductCategories(5)
        [EnableQuery]
        public SingleResult<ProductCategory> GetProductCategory([FromODataUri] int key)
        {
            return SingleResult.Create(db.ProductCategories.Where(productCategory => productCategory.Id == key));
        }

        // PUT: odata/ProductCategories(5)
        public IHttpActionResult Put([FromODataUri] int key, Delta<ProductCategory> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            ProductCategory productCategory = db.ProductCategories.Find(key);
            if (productCategory == null)
            {
                return NotFound();
            }

            patch.Put(productCategory);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductCategoryExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(productCategory);
        }

        // POST: odata/ProductCategories
        public IHttpActionResult Post(ProductCategory productCategory)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ProductCategories.Add(productCategory);
            db.SaveChanges();

            return Created(productCategory);
        }

        // PATCH: odata/ProductCategories(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public IHttpActionResult Patch([FromODataUri] int key, Delta<ProductCategory> patch)
        {
            Validate(patch.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            ProductCategory productCategory = db.ProductCategories.Find(key);
            if (productCategory == null)
            {
                return NotFound();
            }

            patch.Patch(productCategory);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductCategoryExists(key))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Updated(productCategory);
        }

        // DELETE: odata/ProductCategories(5)
        public IHttpActionResult Delete([FromODataUri] int key)
        {
            ProductCategory productCategory = db.ProductCategories.Find(key);
            if (productCategory == null)
            {
                return NotFound();
            }

            db.ProductCategories.Remove(productCategory);
            db.SaveChanges();

            return StatusCode(HttpStatusCode.NoContent);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductCategoryExists(int key)
        {
            return db.ProductCategories.Count(e => e.Id == key) > 0;
        }
    }
}

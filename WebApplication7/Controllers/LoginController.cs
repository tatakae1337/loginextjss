using Microsoft.EntityFrameworkCore.Metadata.Internal;
//using MVCSimpleApp.Models;
using Npgsql;
using System.Data.Entity;
using System.Linq;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using WebApplication6.Models;

namespace MVCSimpleApp.Controllers
{
    public class LoginController : Controller
    {
        //[HttpPost]
        private database db = new database();
        // GET
        public JsonResult LoginUser(string loginPass)
        {
            var jss = new JavaScriptSerializer();
            User userFromJson = jss.Deserialize<User>(loginPass);
            User user = WebApplication6.Models.User.GetUser(userFromJson.username, userFromJson.password, null);
            return Json(user, JsonRequestBehavior.AllowGet);
         
        }
       
    }

    public class NpgSqlConfiguration : DbConfiguration
    {
        public NpgSqlConfiguration()
        {

            string connectionString = @"Server=localhost; Port=5432; Database=extbd; User Id=postgres; Password=123; Timeout=600";

            using (NpgsqlConnection connection = new NpgsqlConnection(connectionString))

            {
                connection.Open();
            }
        }
    }
}
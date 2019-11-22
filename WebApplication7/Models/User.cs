using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Npgsql;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Web;
//using WebApplication6.Models;

namespace WebApplication6.Models

{
    public class database : Microsoft.EntityFrameworkCore.DbContext
    {
        public Microsoft.EntityFrameworkCore.DbSet<User> Users { get; set; }
    }

    public class User
    {
        [Column("username")]
        public string username { get; set; }
        [Column("password")]
        public string password { get; set; }
    
    public static User GetUser (string username, string password, IDbCommand cmd)
        {
            User user = new User();
            cmd.CommandText = "select * from users where pass='" + password + "' and username='" + username + "'";
            using (var reader = cmd.ExecuteReader())
            {

                while (reader.Read())
                {
                    user.username = reader["username"].ToString();
                    user.password = reader["password"].ToString();
                    return user;
                }
            }
            return user;
        }
    }
}

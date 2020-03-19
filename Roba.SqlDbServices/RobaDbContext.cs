using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Roba.SqlDbServices
{
    public class RobaDbContext : DbContext
    {
        public RobaDbContext(DbContextOptions<RobaDbContext> options) : base(options)
        {

        }
        public DbSet<Item> Items { get; set; }
    }
}

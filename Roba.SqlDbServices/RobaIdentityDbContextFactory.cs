using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;

namespace Roba.SqlDbServices
{
    public class RobaIdentityDbContextFactory : IDesignTimeDbContextFactory<RobaIdentityDbContext>
    {
        public RobaIdentityDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<RobaIdentityDbContext>();
            builder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=Roba;Trusted_Connection=True;MultipleActiveResultSets=true",
                optionsbuilder => optionsbuilder.MigrationsAssembly(typeof(RobaIdentityDbContext).GetTypeInfo().Assembly.GetName().Name));
            return new RobaIdentityDbContext(builder.Options);
        }
    }
}

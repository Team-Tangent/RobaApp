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
            builder.UseSqlServer("Server=tcp:robaio.database.windows.net,1433;Initial Catalog=RobaDB;Persist Security Info=False;User ID=Nexul2020;Password=Tangent20;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;",
                optionsbuilder => optionsbuilder.MigrationsAssembly(typeof(RobaIdentityDbContext).GetTypeInfo().Assembly.GetName().Name));
            return new RobaIdentityDbContext(builder.Options);
        }
    }
}

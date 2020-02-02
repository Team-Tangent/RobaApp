using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Roba.SqlDbServices
{
    public class RobaIdentityDbContext : IdentityDbContext<RobaIdentityUser, IdentityRole<Guid>, Guid>
    {
        public RobaIdentityDbContext(DbContextOptions<RobaIdentityDbContext> options) : base(options) { }
        protected RobaIdentityDbContext() : base() { }
    }
}

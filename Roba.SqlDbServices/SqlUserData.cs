using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Roba.SqlDbServices
{
    public class SqlUserData : IUserData
    {
        private readonly RobaIdentityDbContext context;
        public SqlUserData (RobaIdentityDbContext context)
        {
            this.context = context;
        }
        public List<RobaIdentityUser> GetAllUsers()
        {
            return context.Users.ToList();
        }

        public RobaIdentityUser GetUserById(Guid UserId)
        {
            return context.Users.FirstOrDefault(x => x.Id == UserId);
        }

        public void UpdateUser(RobaIdentityUser user)
        {
            context.Update(user);
        }
        public void Commit()
        {
            context.SaveChanges();
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Roba.SqlDbServices
{
    public class SqlUserData : IUserData
    {
        private readonly RobaIdentityDbContext context;

        public SqlUserData(RobaIdentityDbContext context)
        {
            this.context = context;
        }

        public RobaIdentityUser Get(Guid id)
        {
            return context.Users.FirstOrDefault(x => x.Id == id);
        }

        public RobaIdentityUser GetSingle(string userName)
        {
            return context.Users.FirstOrDefault(x => x.UserName == userName);
        }
    }
}

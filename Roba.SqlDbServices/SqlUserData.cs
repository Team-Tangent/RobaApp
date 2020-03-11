using System;
using System.Collections.Generic;
using System.Text;

namespace Roba.SqlDbServices
{
    public class SqlUserData : IUserData
    {
        private readonly CrmIdentityDbContext context;

        public SqlUserData(CrmIdentityDbContext context)
        {
            this.context = context;
        }

        public CrmIdentityUser Get(Guid id)
        {
            return context.Users.FirstOrDefault(x => x.Id == id);
        }

        public CrmIdentityUser GetSingle(string userName)
        {
            return context.Users.FirstOrDefault(x => x.UserName == userName);
        }
    }
}

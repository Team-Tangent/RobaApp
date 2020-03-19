using System;
using System.Collections.Generic;
using System.Text;

namespace Roba
{
    public interface IUserData
    {
        RobaIdentityUser GetUserById(Guid UserId);
        List<RobaIdentityUser> GetAllUsers();
        void UpdateUser(RobaIdentityUser user);
        void Commit();
    }
}

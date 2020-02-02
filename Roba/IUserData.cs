using System;
using System.Collections.Generic;
using System.Text;

namespace Roba
{
    public interface IUserData
    {
        RobaIdentityUser Get(Guid id);
        RobaIdentityUser GetSingle(string userName);
    }
}

using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Roba
{
    public class RobaIdentityUser : IdentityUser<Guid>
    {
        [MaxLength(120)]
        public string Name { get; set; }
    }
}

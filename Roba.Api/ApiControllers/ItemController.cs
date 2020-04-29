using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Roba.Api.ApiControllers
{
    [Authorize(Policy = "ApiUser")]
    [Route("api/items")]
    public class ItemController : Controller
    {
        private readonly IItemData _itemData;
        private readonly IUrlHelper _urlHelper;
        private readonly UserManager<RobaIdentityUser> _userManager;
        public ItemController(
            IItemData itemData,
            IUrlHelper urlHelper,
            UserManager<RobaIdentityUser> userManager)
        {
            _itemData = itemData;
            _urlHelper = urlHelper;
            _userManager = userManager;
        }

        //  ./api/items/:id
        [HttpGet("{itemId}")]
        public IActionResult GetSingleItem(int itemId)
        {
            var item = _itemData.GetItemById(itemId);
            return Ok(item);
        }

        // GET api/items/:id
        //GET ALL Items for a Single USER
        [HttpGet("user/current")]
        public IActionResult GetAllItemsForUser()
        {

            System.Security.Claims.Claim userIdClaim = User.Claims.Single(c => c.Type == "id");

            var items = _itemData.GetAllItemsForUser(Guid.Parse(userIdClaim.Value));
            return Ok(items);
        }

        // GET api/items/:id
        //GET ALL Items for a Single USER
        [HttpGet("user/{userId}")]
        public IActionResult GetAllItemsForUser(Guid userId)
        {
            var items = _itemData.GetAllItemsForUser(userId);
            return Ok(items);
        }

        // POST api/<controller>
        [HttpPost("")]
        public IActionResult AddItem([FromBody]Item model)
        {
            if (model == null)
            {
                return BadRequest();
            }
            System.Security.Claims.Claim userIdClaim = User.Claims.Single(c => c.Type == "id");
            var user = _userManager.Users.FirstOrDefault(x => x.Id.ToString() == userIdClaim.Value);
            var item = new Item
            {
                ItemName = model.ItemName,
                UserId = user.Id,
                CreatedOnDate = DateTime.UtcNow,
                CanBeBorrowed = model.CanBeBorrowed,
                LentOut = model.LentOut,
                LentTo = model.LentTo,
                ImageFileContent = model.ImageFileContent,
                ImageFileType = "URL"
            };
            _itemData.AddItem(item);
            _itemData.Commit();
            return Ok(item);
        }

        // PUT api/<controller>/5
        [HttpPut("{itemId}")]
        public IActionResult UpdateItem(int itemId, Item model)
        {
             if (model == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {   //rules failed, return error
                return new ValidationFailedResult(ModelState);
            }

            var item = _itemData.GetItemById(itemId);
            if (item == null)
            {
                return NotFound();
            }

            //update only editable properties from model
            item.ItemName = model.ItemName;
            item.LentOut = model.LentOut;
            item.LentTo = model.LentTo;
            item.CanBeBorrowed = model.CanBeBorrowed;
            item.BorrowedDate = model.BorrowedDate;
            item.ImageFileContent = model.ImageFileContent;
            item.ImageFileType = model.ImageFileType;
            //save update
            _itemData.UpdateItem(item);
            _itemData.Commit();
            return Ok(item); //server version, updated per request

        }

        // DELETE api/item/:id
        [HttpDelete("{itemId}")]
        public IActionResult DeleteItem(int itemId)
        {
            var item = _itemData.GetItemById(itemId);
            if (item == null)
            {
                return NotFound();
            }

            _itemData.DeleteItem(item);
            _itemData.Commit();
            return NoContent();
        }
    }
}

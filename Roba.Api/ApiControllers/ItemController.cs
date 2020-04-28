using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Roba.Api.ApiControllers
{
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
        [HttpGet("{ItemId}")]
        public IActionResult GetSingleItem(int id)
        {
            var item = _itemData.GetItemById(id);
            return Ok(item);
        }

        // GET api/items/:id
        //GET ALL Items for a Single USER
        [HttpGet("user/currentUser")]
        public async Task<IActionResult> GetAllItemsForUser()
        {
        
                var user = await _userManager.FindByNameAsync(User.Identity.Name);
                var userId = user.Id;

                var items = _itemData.GetAllItemsForUser(userId);
            return Ok(items);
        }

        // GET api/items/:id
        //GET ALL Items for a Single USER
        [HttpGet("user/{UserId}")]
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
            var item = new Item
            {
                ItemName = model.ItemName,
                UserId = model.UserId,
                CreatedOnDate = model.CreatedOnDate,
                CanBeBorrowed = model.CanBeBorrowed,
                LentOut = model.LentOut,
                LentTo = model.LentTo,
                ImageFileContent = model.ImageFileContent,
                ImageFileType = model.ImageFileType
            };
            _itemData.AddItem(item);
            _itemData.Commit();
            return Ok(item);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public IActionResult UpdateItem(int ItemId, Item model)
        {
             if (model == null)
            {
                return BadRequest();
            }
            if (!ModelState.IsValid)
            {   //rules failed, return error
                return new ValidationFailedResult(ModelState);
            }

            var item = _itemData.GetItemById(ItemId);
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
        [HttpDelete("{id}")]
        public IActionResult DeleteItem(Item item)
        {
            var item = _itemData.
            _itemData.DeleteItem(item);
            return Ok();
        }
    }
}

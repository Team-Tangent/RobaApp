using System;
using System.Collections.Generic;

namespace Roba
{
    public interface IItemData
    {
        /// <summary>
        /// Gets a single Item by id
        /// </summary>
        Item GetItemById(int ItemId);
        List<Item> GetAllItemsForUser(int UserId);

        void AddItem(Item item);    

        void UpdateItem(Item item);
        void DeleteItem(Item item);
        void Commit();

       
    }
}

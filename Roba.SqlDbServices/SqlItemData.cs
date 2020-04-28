using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Roba.SqlDbServices
{
    public class SqlItemData : IItemData
    {
        private RobaDbContext context;

        public SqlItemData(RobaDbContext context)
        {
            this.context = context;
        }
        public void AddItem(Item item)
        {
            context.Add(item);
        }


        public void DeleteItem(Item item)
        {
            context.Remove(item);
            
        }

        public List<Item> GetAllItemsForUser(Guid UserId)
        {
            return context.Items.Where(x => x.UserId == UserId).ToList();
        }

        public Item GetItemById(int ItemId)
        {
            return context.Items.FirstOrDefault(x => x.ItemId == ItemId);
        }

        public void UpdateItem(Item item)
        {
            //changes tracked automatically. 
        }
        public void Commit()
        {
            context.SaveChanges();
        }
    }
}

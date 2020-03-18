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
            context.SaveChanges();
        }


        public void DeleteItem(Item item)
        {
            context.Remove(item);
            context.SaveChanges();
        }

        public List<Item> GetAllItemsForUser(int UserId)
        {
            return context.Items.Where(x => x.Owner == UserId).ToList();
        }

        public Item GetItemById(int ItemId)
        {
            return context.Items.FirstOrDefault(x => x.ItemId == ItemId);
        }

        public void UpdateItem(Item item)
        {
            //Talk about how to handle updating. Track changes on front end, and just sav
            throw new NotImplementedException();
        }

        public void Commit()
        {
            context.SaveChanges();
        }
    }
}

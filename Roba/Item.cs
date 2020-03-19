using System;
namespace Roba
{
    public class Item
    {
        public int ItemId { get; set; }
        public string ItemName { get; set; }
        public DateTime CreatedOnDate { get; set; }
        public int Owner { get; set; }
        public bool LentOut { get; set; }
        public bool CanBeBorrowed { get; set; }
        public DateTime BorrowedDate { get; set; }
        public DateTime ReturnDate { get; set; }
        public string Image { get; set; }
    }
}
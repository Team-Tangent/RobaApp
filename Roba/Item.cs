using System;
namespace Roba
{
    public class Item
    {
        public int ItemId { get; set; }
        public string ItemName { get; set; }
        public DateTime CreatedOnDate { get; set; }
        public Guid Owner { get; set; }
        public bool LentOut { get; set; }
        public bool CanBeBorrowed { get; set; }
        public DateTime BorrowedDate { get; set; }
        public DateTime ReturnDate { get; set; }
        public string ImageFileContent { get; set; }
        public string ImageFileType { get; set; }

    }
} 
using System;
namespace Roba
{
    public class Item
    {
        public int ItemId { get; set; }
        public string ItemName { get; set; }
        public DateTime CreatedOnDate { get; set; }
        public Guid UserId { get; set; }
        public bool LentOut { get; set; }
        public string LentTo { get; set; }
        public bool CanBeBorrowed { get; set; }
        public DateTime BorrowedDate { get; set; }
        public DateTime ReturnDate { get; set; }
        public string ImageFileContent { get; set; }
        public string ImageFileType { get; set; }
    }
} 
using System;
namespace Roba
{
    public interface IItemData
    {
        /// <summary>
        /// Gets a single Item by id
        /// </summary>
        Item Get(int ItemId);

        void Add(Item item);

        void Update(Item item);

        void Commit();
    }
}

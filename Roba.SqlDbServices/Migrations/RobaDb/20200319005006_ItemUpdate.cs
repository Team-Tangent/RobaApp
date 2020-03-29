using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Roba.SqlDbServices.Migrations.RobaDb
{
    public partial class ItemUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Items",
                columns: table => new
                {
                    ItemId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ItemName = table.Column<string>(nullable: true),
                    CreatedOnDate = table.Column<DateTime>(nullable: false),
                    Owner = table.Column<int>(nullable: false),
                    LentOut = table.Column<bool>(nullable: false),
                    CanBeBorrowed = table.Column<bool>(nullable: false),
                    BorrowedDate = table.Column<DateTime>(nullable: false),
                    ReturnDate = table.Column<DateTime>(nullable: false),
                    ImageFileContent = table.Column<byte[]>(nullable: true),
                    ImageFileType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Items", x => x.ItemId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Items");
        }
    }
}

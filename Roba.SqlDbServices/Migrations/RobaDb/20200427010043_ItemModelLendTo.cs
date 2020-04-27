using Microsoft.EntityFrameworkCore.Migrations;

namespace Roba.SqlDbServices.Migrations.RobaDb
{
    public partial class ItemModelLendTo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Owner",
                table: "Items",
                newName: "UserId");

            migrationBuilder.AddColumn<string>(
                name: "LentTo",
                table: "Items",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LentTo",
                table: "Items");

            migrationBuilder.RenameColumn(
                name: "UserId",
                table: "Items",
                newName: "Owner");
        }
    }
}

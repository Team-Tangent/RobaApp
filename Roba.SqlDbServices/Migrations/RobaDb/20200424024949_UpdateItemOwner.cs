using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Roba.SqlDbServices.Migrations.RobaDb
{
    public partial class UpdateItemOwner : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<Guid>(
                name: "Owner",
                table: "Items",
                nullable: false,
                oldClrType: typeof(int));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Owner",
                table: "Items",
                nullable: false,
                oldClrType: typeof(Guid));
        }
    }
}

using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Roba.SqlDbServices.Migrations.RobaDb
{
    public partial class UpdateItemClass : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ImageFileContent",
                table: "Items",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "ImageFileContent",
                table: "Items",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}

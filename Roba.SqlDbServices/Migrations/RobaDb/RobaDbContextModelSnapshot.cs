﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Roba.SqlDbServices;

namespace Roba.SqlDbServices.Migrations.RobaDb
{
    [DbContext(typeof(RobaDbContext))]
    partial class RobaDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Roba.Item", b =>
                {
                    b.Property<int>("ItemId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("BorrowedDate");

                    b.Property<bool>("CanBeBorrowed");

                    b.Property<DateTime>("CreatedOnDate");

                    b.Property<byte[]>("ImageFileContent");

                    b.Property<string>("ImageFileType");

                    b.Property<string>("ItemName");

                    b.Property<bool>("LentOut");

                    b.Property<int>("Owner");

                    b.Property<DateTime>("ReturnDate");

                    b.HasKey("ItemId");

                    b.ToTable("Items");
                });
#pragma warning restore 612, 618
        }
    }
}

IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

CREATE TABLE [Items] (
    [ItemId] int NOT NULL IDENTITY,
    [ItemName] nvarchar(max) NULL,
    [CreatedOnDate] datetime2 NOT NULL,
    [Owner] int NOT NULL,
    [LentOut] bit NOT NULL,
    [CanBeBorrowed] bit NOT NULL,
    [BorrowedDate] datetime2 NOT NULL,
    [ReturnDate] datetime2 NOT NULL,
    [ImageFileContent] varbinary(max) NULL,
    [ImageFileType] nvarchar(max) NULL,
    CONSTRAINT [PK_Items] PRIMARY KEY ([ItemId])
);

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200319005006_ItemUpdate', N'2.2.6-servicing-10079');

GO

DECLARE @var0 sysname;
SELECT @var0 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Items]') AND [c].[name] = N'ImageFileContent');
IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [Items] DROP CONSTRAINT [' + @var0 + '];');
ALTER TABLE [Items] ALTER COLUMN [ImageFileContent] nvarchar(max) NULL;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200329180403_UpdateItemClass', N'2.2.6-servicing-10079');

GO

DECLARE @var1 sysname;
SELECT @var1 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[Items]') AND [c].[name] = N'Owner');
IF @var1 IS NOT NULL EXEC(N'ALTER TABLE [Items] DROP CONSTRAINT [' + @var1 + '];');
ALTER TABLE [Items] ALTER COLUMN [Owner] uniqueidentifier NOT NULL;

GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20200424024949_UpdateItemOwner', N'2.2.6-servicing-10079');

GO


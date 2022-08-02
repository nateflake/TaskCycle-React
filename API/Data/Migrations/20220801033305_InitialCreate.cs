using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Tasks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", nullable: true),
                    Description = table.Column<string>(type: "TEXT", nullable: true),
                    DueDate = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ScheduleStatus = table.Column<int>(type: "INTEGER", nullable: true),
                    ReminderSet = table.Column<bool>(type: "INTEGER", nullable: false),
                    FirstReminderDateTime = table.Column<DateTime>(type: "TEXT", nullable: false),
                    ReminderIntervalCount = table.Column<int>(type: "INTEGER", nullable: false),
                    ReminderIntervalUnits = table.Column<int>(type: "INTEGER", nullable: true),
                    TailCount = table.Column<int>(type: "INTEGER", nullable: false),
                    TailUnits = table.Column<int>(type: "INTEGER", nullable: true),
                    ImageUrl = table.Column<string>(type: "TEXT", nullable: true),
                    CreationDate = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tasks", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Tasks");
        }
    }
}

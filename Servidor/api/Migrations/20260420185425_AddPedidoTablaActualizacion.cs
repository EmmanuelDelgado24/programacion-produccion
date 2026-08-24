using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class AddPedidoTablaActualizacion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "coleccion",
                table: "pedidos",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "color_big_zap",
                table: "pedidos",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "construccion",
                table: "pedidos",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "fecha_liberacion_explosion",
                table: "pedidos",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "fecha_realizacion_explosion",
                table: "pedidos",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "pedido_cliente",
                table: "pedidos",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "pedido_interno",
                table: "pedidos",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "piel",
                table: "pedidos",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "semana_folio_explosion",
                table: "pedidos",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "coleccion",
                table: "pedidos");

            migrationBuilder.DropColumn(
                name: "color_big_zap",
                table: "pedidos");

            migrationBuilder.DropColumn(
                name: "construccion",
                table: "pedidos");

            migrationBuilder.DropColumn(
                name: "fecha_liberacion_explosion",
                table: "pedidos");

            migrationBuilder.DropColumn(
                name: "fecha_realizacion_explosion",
                table: "pedidos");

            migrationBuilder.DropColumn(
                name: "pedido_cliente",
                table: "pedidos");

            migrationBuilder.DropColumn(
                name: "pedido_interno",
                table: "pedidos");

            migrationBuilder.DropColumn(
                name: "piel",
                table: "pedidos");

            migrationBuilder.DropColumn(
                name: "semana_folio_explosion",
                table: "pedidos");
        }
    }
}

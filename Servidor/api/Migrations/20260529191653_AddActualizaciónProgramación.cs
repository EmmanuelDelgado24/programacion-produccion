using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class AddActualizaciónProgramación : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Ciudadid",
                table: "programacion",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ClienteId",
                table: "programacion",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Departamentoid",
                table: "programacion",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "ProgramacionidPedido",
                table: "pedido_detalle_numeracion",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_programacion_Ciudadid",
                table: "programacion",
                column: "Ciudadid");

            migrationBuilder.CreateIndex(
                name: "IX_programacion_ClienteId",
                table: "programacion",
                column: "ClienteId");

            migrationBuilder.CreateIndex(
                name: "IX_programacion_Departamentoid",
                table: "programacion",
                column: "Departamentoid");

            migrationBuilder.CreateIndex(
                name: "IX_pedido_detalle_numeracion_ProgramacionidPedido",
                table: "pedido_detalle_numeracion",
                column: "ProgramacionidPedido");

            migrationBuilder.AddForeignKey(
                name: "FK_pedido_detalle_numeracion_programacion_ProgramacionidPedido",
                table: "pedido_detalle_numeracion",
                column: "ProgramacionidPedido",
                principalTable: "programacion",
                principalColumn: "idpedido");

            migrationBuilder.AddForeignKey(
                name: "FK_programacion_Ciudades_Ciudadid",
                table: "programacion",
                column: "Ciudadid",
                principalTable: "ciudades",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_programacion_Departamentos_Departamentoid",
                table: "programacion",
                column: "Departamentoid",
                principalTable: "departamentos",
                principalColumn: "id");

            migrationBuilder.AddForeignKey(
                name: "FK_programacion_clientes_ClienteId",
                table: "programacion",
                column: "ClienteId",
                principalTable: "clientes",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_pedido_detalle_numeracion_programacion_ProgramacionidPedido",
                table: "pedido_detalle_numeracion");

            migrationBuilder.DropForeignKey(
                name: "FK_programacion_Ciudades_Ciudadid",
                table: "programacion");

            migrationBuilder.DropForeignKey(
                name: "FK_programacion_Departamentos_Departamentoid",
                table: "programacion");

            migrationBuilder.DropForeignKey(
                name: "FK_programacion_clientes_ClienteId",
                table: "programacion");

            migrationBuilder.DropIndex(
                name: "IX_programacion_Ciudadid",
                table: "programacion");

            migrationBuilder.DropIndex(
                name: "IX_programacion_ClienteId",
                table: "programacion");

            migrationBuilder.DropIndex(
                name: "IX_programacion_Departamentoid",
                table: "programacion");

            migrationBuilder.DropIndex(
                name: "IX_pedido_detalle_numeracion_ProgramacionidPedido",
                table: "pedido_detalle_numeracion");

            migrationBuilder.DropColumn(
                name: "Ciudadid",
                table: "programacion");

            migrationBuilder.DropColumn(
                name: "ClienteId",
                table: "programacion");

            migrationBuilder.DropColumn(
                name: "Departamentoid",
                table: "programacion");

            migrationBuilder.DropColumn(
                name: "ProgramacionidPedido",
                table: "pedido_detalle_numeracion");
        }
    }
}

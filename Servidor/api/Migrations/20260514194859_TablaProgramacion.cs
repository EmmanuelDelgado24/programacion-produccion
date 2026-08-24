using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class TablaProgramacion : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "programacion",
                columns: table => new
                {
                    idpedido = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    cliente = table.Column<string>(type: "text", nullable: false),
                    semana = table.Column<int>(type: "integer", nullable: false),
                    departamento = table.Column<string>(type: "text", nullable: false),
                    linea = table.Column<char>(type: "character(1)", nullable: false),
                    dia = table.Column<string>(type: "text", nullable: false),
                    modelo = table.Column<int>(type: "integer", nullable: false),
                    demanda_dia = table.Column<int>(type: "integer", nullable: false),
                    personal = table.Column<int>(type: "integer", nullable: false),
                    minutos_dispo = table.Column<int>(type: "integer", nullable: false),
                    tiempo_est = table.Column<decimal>(type: "numeric", nullable: false),
                    capacidad_dia = table.Column<int>(type: "integer", nullable: false),
                    carga_dia = table.Column<int>(type: "integer", nullable: false),
                    saturación = table.Column<decimal>(type: "numeric", nullable: false),
                    capacidad_real = table.Column<int>(type: "integer", nullable: false),
                    programacion_ideal = table.Column<int>(type: "integer", nullable: false),
                    deficit = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_programacion", x => x.idpedido);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "programacion");
        }
    }
}

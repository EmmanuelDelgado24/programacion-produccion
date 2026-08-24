using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class CrearModelosTiempos : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "modelos_inyeccion",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    linea = table.Column<string>(type: "text", nullable: true),
                    modelo = table.Column<string>(type: "text", nullable: true),
                    estilo = table.Column<string>(type: "text", nullable: true),
                    proceso = table.Column<string>(type: "text", nullable: true),
                    tiempo_std_min = table.Column<decimal>(type: "numeric", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_modelos_inyeccion", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "modelos_plantilla",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    linea = table.Column<string>(type: "text", nullable: true),
                    modelo = table.Column<string>(type: "text", nullable: true),
                    estilo = table.Column<string>(type: "text", nullable: true),
                    proceso = table.Column<string>(type: "text", nullable: true),
                    tiempo_std_min = table.Column<decimal>(type: "numeric", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_modelos_plantilla", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "modelos_preacabado",
                columns: table => new
                {
                    id = table.Column<long>(type: "bigint", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    linea = table.Column<string>(type: "text", nullable: true),
                    modelo = table.Column<string>(type: "text", nullable: true),
                    estilo = table.Column<string>(type: "text", nullable: true),
                    proceso = table.Column<string>(type: "text", nullable: true),
                    tiempo_std_min = table.Column<decimal>(type: "numeric", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_modelos_preacabado", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "modelos_inyeccion");

            migrationBuilder.DropTable(
                name: "modelos_plantilla");

            migrationBuilder.DropTable(
                name: "modelos_preacabado");
        }
    }
}

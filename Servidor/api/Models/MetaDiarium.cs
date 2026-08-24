using System;
using System.Collections.Generic;

namespace api.Models;

public partial class MetaDiarium
{
    public int IdMeta { get; set; }

    public string Ciudad { get; set; } = null!;

    public string Departamento { get; set; } = null!;

    public string Subdepto { get; set; } = null!;

    public DateOnly? Fecha { get; set; }

    public short Personal { get; set; }

    public string Modelos { get; set; } = null!;

    public string Minutaje { get; set; } = null!;

    public string Pares { get; set; } = null!;

    public short MinutosTrabajados { get; set; }

    public short MinutosDisponibles { get; set; }

    public short Eficiencia { get; set; }

    public short MetaDiaria { get; set; }

    public short ParesHora { get; set; }

    public short VelocidadBanda { get; set; }
}

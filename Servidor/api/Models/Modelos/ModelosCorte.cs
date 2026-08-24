using System;
using System.Collections.Generic;

namespace api.Models.Modelos;

public partial class ModelosCorte
{
    public long id { get; set; }

    public string? linea { get; set; }

    public string? modelo { get; set; }

    public string? estilo { get; set; }

    public string? proceso { get; set; }

    public decimal? tiempoPiel { get; set; }

    public decimal? tiempoForro { get; set; }

    public decimal? tiempoLoteo { get; set; }

    public decimal? tiempoStdMin { get; set; }
}

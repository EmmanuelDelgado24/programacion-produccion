using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Models.Modelos;

public partial class ModelosCoordinado
{
    [Key]
    [Column("id")]
    public long id { get; set; }

    public string? linea { get; set; }

    public string? modelo { get; set; }

    public string? estilo { get; set; }

    public string? proceso { get; set; }

    public decimal? tiempoStdMin { get; set; }
}

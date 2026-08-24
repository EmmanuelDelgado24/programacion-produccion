namespace api.Models.Hormas
{
    public class MovimientosHormas
    {
        public int id_movimiento { get; set; }

        public int id_horma { get; set; }

        public int origen_planta_id { get; set; }         

        public int destino_planta_id { get; set; }       

        public int cantidad { get; set; }                

        public DateTime fecha_envio { get; set; }

        public DateTime fecha_recepcion { get; set; }

        public string? estatus_envio { get; set; }
    }
}

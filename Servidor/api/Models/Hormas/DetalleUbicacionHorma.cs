namespace api.Models.Hormas
{
    public class DetalleUbicacionHorma
    {
        public int id_ubicacion { get; set; }
        public int id_horma { get; set; }
        public int id_planta { get; set; }
        public int cantidad_disponible { get; set; }
        public int cantidad_en_transito { get; set; }

    }
}

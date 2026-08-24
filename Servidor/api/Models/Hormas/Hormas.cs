namespace api.Models.Hormas
{
    public class Hormas
    {
        public int id_horma { get; set; }

        public string? linea { get; set; }

        public string? modelo { get; set; }

        public string? estilo { get; set; }

        public string? proceso { get; set; }
        public int punto { get; set; }
        public int stock_total { get; set; }

    }
}

namespace FurnitureStore.Entities;

public class ProductEntity
{ 
        public int id { get; set; } 
        public string title { get; set; }
        public string price { get; set; }
        public string description { get; set; }
        public string category_id { get; set; }
        public string image_name { get; set; }
}
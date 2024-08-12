using FurnitureStore.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace FurnitureStore.Controllers;



[ApiController]
[Route("Products")]
public class ProductController : ControllerBase
{
    private readonly IConfiguration _Configuration;

    public ProductController(IConfiguration configuration)
    {
        _Configuration = configuration;
    }
    
    [HttpGet]
    public object GetProducts()
    {
        var products = new List<ProductEntity>();
        
        try
        {
            var connectionString = _Configuration.GetConnectionString("Default");
            //Create Connect to sql server
            SqlConnection connection = new SqlConnection(connectionString);
            
            var sql = "SELECT *FROM tbl_furniture";
            if (sql == null) throw new ArgumentNullException(nameof(sql));
            SqlCommand command = new SqlCommand(sql, connection);
            connection.Open();
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
                var id = reader.GetInt32(0);
                var title = reader.GetString(1);
                var price = reader.GetString(2);
                var description = reader.GetString(3);
                var category_id = reader.GetString(4);
                var image_name = reader.GetString(5);
                var product = new ProductEntity();
                product.id = id;
                product.title = title;
                product.price = price;
                product.description = description;
                product.category_id = category_id;
                product.image_name = image_name;
                //add product into list
                products.Add(product);
            }
        }
        catch (Exception ex)
        {
            var error = ex.Message;
        }
        return products;
    }
//---------------------------------create
    [HttpPost("create")]
    public string CreateProduct([FromBody] ProductEntity request)
    {
        try
        {
            var connectionString = _Configuration.GetConnectionString("Default");
            SqlConnection connection = new SqlConnection(connectionString);
            var sql = "INSERT INTO tbl_furniture(title, price, description, category_id, image_name) VALUES (@title, @price, @description, @category_id, @image_name)";
            SqlCommand command = new SqlCommand(sql, connection);
            command.Parameters.AddWithValue("@title", request.title);
            command.Parameters.AddWithValue("@price", request.price);
            command.Parameters.AddWithValue("@description", request.description);
            command.Parameters.AddWithValue("@category_id", request.category_id);
            command.Parameters.AddWithValue("@image_name", request.image_name);
            
            connection.Open();
            var rowAffected = command.ExecuteNonQuery();
            if (rowAffected > 0)
            {
                return "Product Create Successfully";
            }
            else
            {
                return "Error Creating Product";
            }
        }
        catch (Exception ex)
        {
            return $"Error Creating Product { ex.Message } ";
        }
        return "Create";
    }
//-------------------------------------update 
    [HttpPut("update")]
    public string UpdateProduct([FromBody] ProductEntity request)
    {
        try
        {
            var connectionString = _Configuration.GetConnectionString("Default");
            SqlConnection connection = new SqlConnection(connectionString);
            var sql = "UPDATE tbl_furniture SET title=@title , price=@price , description=@description , category_id=@category_id, image_name=@image_name WHERE id=@id";
            SqlCommand command = new SqlCommand(sql, connection);
            command.Parameters.AddWithValue("@title", request.title);
            command.Parameters.AddWithValue("@price", request.price);
            command.Parameters.AddWithValue("@description", request.description);
            command.Parameters.AddWithValue("@category_id", request.category_id);
            command.Parameters.AddWithValue("@image_name", request.image_name);
            command.Parameters.AddWithValue("@id", request.id);
            connection.Open();
            var rowaffected = command.ExecuteNonQuery();
            if (rowaffected > 0)
            {
                return "Product Updated successfully";
            }
            else
            {
                return "Can not update product";
            }
        }
        catch (Exception ex)
        {
            return $"Error Update Product {ex.Message} ";
        }
    }
//------------------------------------------------delete
    [HttpDelete("delete/{id}")]
    public async Task<IActionResult> DeleteUser(int id)
    {
        var conStr = _Configuration.GetConnectionString("Default");
        SqlConnection conn = new SqlConnection(conStr);
        conn.Open();
        var sql = "DELETE FROM tbl_furniture WHERE id = @id";
        SqlCommand command = new SqlCommand(sql, conn);
        command.Parameters.AddWithValue("@id", id);
        var affectedRow = command.ExecuteNonQuery();
        var message = "Can not delete product";
        if (affectedRow > 0)
        {
            message = "Delete product successfully ";
        }

        return Ok(message);
    }
    
//---------------------------------------------single
    [HttpGet("{id}")]
    public ProductEntity GetProductById(int id)
    {
        var product = new ProductEntity();
        try
        {
            var connectionString = _Configuration.GetConnectionString("Default");
            SqlConnection connection = new SqlConnection(connectionString);
            var sql = "  SELECT *FROM tbl_product WHERE id=@id";
            SqlCommand command = new SqlCommand(sql, connection);
            command.Parameters.AddWithValue("@id", id);
            connection.Open();
            SqlDataReader reader = command.ExecuteReader();
            if (reader.HasRows) 
            {
                reader.Read();
                int uId = reader.GetInt32(0);
                string title = reader.GetString(1);
                string des = reader.GetString(2);
                product.id = uId;
                product.title = title;
                product.price = des;
            }
        }
        catch (Exception e)
        {
            var error = $"Error creating product {e.Message}";
        }
        return product;
    }
    
    //-------------------------------------upload
    [HttpPost(template: "upload")]
    public async Task<IActionResult> UploaFile(IFormFile file)
    {
        if (file == null || file.Length == 0)
        {
            return BadRequest("No File uploaded.");
        }

        var uploadFolderPath = "D:\\Aditi\\hong656.github.io\\FinalProject\\src\\assets\\product-pic";

        var filePath = Path.Combine(uploadFolderPath, file.FileName);
        var stream = new FileStream(filePath, FileMode.Create);
        await file.CopyToAsync(stream);
        return Ok(new { filePath });
    }
    
    
    //-------------------------------------Multi upload
    [HttpPost(template: "uploads")]
    public async Task<IActionResult> UploadFiles(IFormFileCollection files)
    {
        if (files == null || files.Count == 0)
        {
            return BadRequest("No files uploaded.");
        }

        var uploadFolderPath = "D:\\Aditi\\hong656.github.io\\FinalProject\\src\\assets\\product-pic";
        var uploadedFiles = new List<string>();

        foreach (var file in files)
        {
            var filePath = Path.Combine(uploadFolderPath, file.FileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }
            uploadedFiles.Add(filePath);
        }

        return Ok(new { uploadedFiles });
    }
    
    //--------------------------------productlist
    [HttpGet("list")]
    public async Task<IActionResult> Getproduct()
    {
        var products = new List<ProductEntity>();
        
        var Strcon = _Configuration.GetConnectionString("Default");
        SqlConnection conn = new SqlConnection(Strcon);
        conn.Open();
        var sql = "SELECT *FROM tbl_furniture ORDER BY id DESC";
        SqlCommand command = new SqlCommand(sql, conn);
        SqlDataReader reader = command.ExecuteReader();
        while (reader.Read())
        {
            var id = reader.GetInt32(reader.GetOrdinal("id"));
            var title = reader.GetString(reader.GetOrdinal("title"));
            var price = reader.GetString(reader.GetOrdinal("price"));
            var description = reader.GetString(reader.GetOrdinal("description"));
            var category_id = reader.GetString(reader.GetOrdinal("category_id"));
            var image_name = reader.GetString(reader.GetOrdinal("image_name"));
            var product = new ProductEntity();
            product.id = id;
            product.title = title;
            product.price = price;
            product.description = description;
            product.category_id = category_id;
            product.image_name = image_name;
            products.Add(product);
        }

        return Ok(products);
    }
}

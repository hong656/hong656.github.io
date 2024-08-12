using FurnitureStore.Entities;
using FurnitureStore.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace FurnitureStore.Controllers;

[ApiController]
[Route("api/login")]
public class LoginController : ControllerBase
{
    private readonly IConfiguration _configuration;
    public LoginController(IConfiguration configuration)
    {
        _configuration = configuration;
    }
    
    
    [HttpPost]
    public IActionResult Dologin([FromBody] LoginEntity request)
    {
        var conStr = _configuration.GetConnectionString("Default");
        SqlConnection conn = new SqlConnection(conStr); 
        conn.Open();
        var sql = "SELECT *FROM tbl_user WHERE username = @username";
        SqlCommand cd = new SqlCommand(sql, conn);
        cd.Parameters.AddWithValue("@username", request.username);
        var reader = cd.ExecuteReader();
        var user = new UserEntity();
        if (reader.HasRows)
        {
            reader.Read();
            var firstName = reader.GetString(1);
            var lastName = reader.GetString(3);
            var email = reader.GetString(4);
            var username = reader.GetString(5);
            //assign to UserEntity
            var password = reader.GetString(2);
            user.first_name = firstName;
            user.last_name = lastName;
            user.email = email;
            user.username = username;
            user.password = password;
        }
        
        var helper = new GeneralHelper();
        var isMatch = helper.VerifyPassword(request.password, user.password ?? "");
        if (!isMatch)
        {
            return Unauthorized("Wrong username and password.");
        }

        var res = new 
        {
            firstName = user.first_name,
            lastName = user.last_name,
            email = user.email,
            username = user.username
        };
        return Ok(res);
    }
}
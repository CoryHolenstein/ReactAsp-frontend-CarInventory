using CarInventoryReactAsp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarInventoryReactAsp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        readonly String BASE_URL = "http://localhost:3000";

        private readonly IHttpClientFactory _httpClientFactory;
        public LoginController(IHttpClientFactory httpClientFactory) =>
       _httpClientFactory = httpClientFactory;

        [HttpPost("login")]
        public async Task<String> Post([FromBody] UserLogin info)
        {

            var client = _httpClientFactory.CreateClient();
            UserLogin login = new UserLogin();
            login.username = info.username;
            login.password = info.password;
            JsonContent content = JsonContent.Create(login);


            var response = await client.PostAsync(BASE_URL + "/users/login/", content);
            Console.WriteLine(login.username, login.password);
            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            Console.WriteLine(responseBody);
            return responseBody;
        }

    }
}

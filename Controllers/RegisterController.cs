using CarInventoryReactAsp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarInventoryReactAsp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        readonly String BASE_URL = "http://localhost:3000";

        private readonly IHttpClientFactory _httpClientFactory;
        public RegisterController(IHttpClientFactory httpClientFactory) =>
       _httpClientFactory = httpClientFactory;

        [HttpPost("register")]
        public async Task<String> Post([FromBody] UserRegister info)
        {

            var client = _httpClientFactory.CreateClient();
            UserRegister register = new UserRegister();
            register.username = info.username;
            register.password = info.password;
            register.passwordConfirmation = info.passwordConfirmation;
            JsonContent content = JsonContent.Create(register);


            var response = await client.PostAsync(BASE_URL + "/users/register/", content);
            Console.WriteLine(register.username, register.password);
            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            Console.WriteLine(responseBody);
            return responseBody;
        }


    }
}
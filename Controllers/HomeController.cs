using CarInventoryReactAsp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarInventoryReactAsp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class HomeController : ControllerBase
    {
        readonly String BASE_URL = "http://localhost:3000";

        private readonly IHttpClientFactory _httpClientFactory;
        public HomeController(IHttpClientFactory httpClientFactory) =>
       _httpClientFactory = httpClientFactory;

        //home controller is the main page
        [HttpPost("get-all-cars")]
        public async Task<String> Post()
        {

            var client = _httpClientFactory.CreateClient();
            var response = await client.PostAsync(BASE_URL + "/inventory/getcars/", null);

            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            Console.WriteLine(responseBody);
            return responseBody;
        }

    }
}


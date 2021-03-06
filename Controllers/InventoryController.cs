using CarInventoryReactAsp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarInventoryReactAsp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        readonly String BASE_URL = "http://localhost:3000";

        private readonly IHttpClientFactory _httpClientFactory;
        public InventoryController(IHttpClientFactory httpClientFactory) =>
       _httpClientFactory = httpClientFactory;


        //this is our delete car end point
        //user passes in an inventory id and we delete it based off that
        [HttpPost("delete-car")]
        public async Task<String> Post([FromBody] Car car)
        {


            var client = _httpClientFactory.CreateClient();
            JsonContent content = JsonContent.Create(car);

            Console.WriteLine(content); 
            var response = await client.PostAsync(BASE_URL + "/inventory/deletecar/", content);

            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            Console.WriteLine(responseBody);
            return responseBody;
        }
        //this is our add car endpoint
        //we bring in a car object, and we generate a random inventory ID before sending it to the API
        [HttpPost("add-car")]
        public async Task<String> add([FromBody] Car car)
        {

            Random random = new Random();
             int randomNum = random.Next(101);

            var client = _httpClientFactory.CreateClient();

            car.InventoryID = randomNum.ToString();

 
            JsonContent content = JsonContent.Create(car);
            Console.WriteLine(car.InventoryID, car.CarName);

            var response = await client.PostAsync(BASE_URL + "/inventory/addcar/", content);
      
            response.EnsureSuccessStatusCode();

            string responseBody = await response.Content.ReadAsStringAsync();

            Console.WriteLine(responseBody);
            return responseBody;
        }

 

    }
}
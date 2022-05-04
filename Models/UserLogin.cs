using System.Text.Json.Serialization;

namespace CarInventoryReactAsp.Models
{
    public class UserLogin
    {

        public UserLogin()
        {
            username = "hmm";
            password = "hmmm";
        }
        public UserLogin(string userInput, string passInput)
        {
            username = userInput;
            password = passInput;
        }

        [JsonPropertyName("username")]
        public string username { get; set; }

        [JsonPropertyName("password")]
        public string password { get; set; }
    }
}

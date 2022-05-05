using System.Text.Json.Serialization;

namespace CarInventoryReactAsp.Models
{

    //userlogin reference, could possibly put register and login into one class
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

        //login json property names

        [JsonPropertyName("username")]
        public string username { get; set; }

        [JsonPropertyName("password")]
        public string password { get; set; }
    }
}

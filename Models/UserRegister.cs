using System.Text.Json.Serialization;

namespace CarInventoryReactAsp.Models
{
    public class UserRegister
    {

        public UserRegister()
        {
            username = "hmm";
            password = "hmmm";
            passwordConfirmation = "hmmmmm";
        }
        public UserRegister(string userInput, string passInput, string passConfirmationInput)
        {
            username = userInput;
            password = passInput;
            passwordConfirmation = passConfirmationInput;
        }

        [JsonPropertyName("username")]
        public string username { get; set; }

        [JsonPropertyName("password")]
        public string password { get; set; }

        [JsonPropertyName("passwordConfirmation")]
        public string passwordConfirmation { get; set; }

    }
}

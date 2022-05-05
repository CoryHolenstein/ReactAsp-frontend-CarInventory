using System.Text.Json.Serialization;

namespace CarInventoryReactAsp.Models
{
    public class Car
    {

        public Car()
        {
            InventoryID = "hmm";
            CarBrand = "hmm";
            CarName = "hmmm";
            CarColor = "hmmm";
            CarType = "hmmm";
        }
        public Car(string inputInventoryID, string inputCarBrand, string inputCarName, string inputCarColor, string inputCarType)
        {
            InventoryID = inputInventoryID;
            CarBrand = inputCarBrand;
            CarName = inputCarName;
            CarColor = inputCarColor;
            CarType = inputCarType;

        }

        [JsonPropertyName("inventoryID")]
        public string InventoryID { get; set; }

        [JsonPropertyName("carBrand")]
        public string CarBrand { get; set; }

        [JsonPropertyName("carName")]
        public string CarName { get; set; }

        [JsonPropertyName("carColor")]
        public string CarColor { get; set; }

        [JsonPropertyName("carType")]
        public string CarType { get; set; }
    }
}

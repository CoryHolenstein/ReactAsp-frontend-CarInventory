using System.Text.Json.Serialization;

namespace CarInventoryReactAsp.Models
{
    public class Car
    {
        //car object base class
        //every car has an inventory id,brand, name, color and type
        //inventory ID could be randomly generated on object creeation (look into this)
       
        public Car()
        {
            InventoryID = "hmm";
            CarBrand = "hmm";
            CarName = "hmmm";
            CarColor = "hmmm";
            CarType = "hmmm";
        }
        public Car(string inputInventoryID)
        {
            InventoryID = inputInventoryID;
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

        //variables and their json identifiers
        //these should match the middle end 
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

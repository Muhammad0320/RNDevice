import PlacesForm from "../component/places/PlacesForm";
import { insertPlace } from "../utils/database";

function AddPlaces({ navigation }) {
  const handleSaveData = async (place) => {
    await insertPlace(place);

    navigation.navigate("AllPlaces", {
      place,
    });
  };

  return <PlacesForm onSaveData={handleSaveData} />;
}

export default AddPlaces;

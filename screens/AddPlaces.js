import PlacesForm from "../component/places/PlacesForm";

function AddPlaces({ navigation }) {
  const handleSaveData = (place) => {
    navigation.navigate("AllPlaces", {
      place,
    });
  };

  return <PlacesForm onSaveData={handleSaveData} />;
}

export default AddPlaces;

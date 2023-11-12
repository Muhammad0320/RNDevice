import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../utils/color";
import { useCallback, useState } from "react";
import ImagePicker from "../component/places/ImagePicker";
import LocationPicker from "../component/places/LocationPicker";
import Button from "../component/ui/Button";

function AddPlaces() {
  const [enteredTitle, setEnteredTitle] = useState("");

  const [pickedLoction, setPickLocation] = useState(null);

  const [pickImage, setPickImage] = useState("");

  const handleTextInput = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  const handlePickedLocation = useCallback((location) => {
    setPickLocation(location);
  }, []);

  const handlePcikedImage = (image) => {
    setPickImage(image);
  };

  const handleSavePlace = () => {
    console.log(enteredTitle);
    console.log(pickedLoction);
    console.log(pickImage);
  };

  return (
    <ScrollView style={styles.form}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}> Title </Text>
        <TextInput
          style={styles.input}
          onChangeText={handleTextInput}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onPickImage={handlePcikedImage} />
      <LocationPicker onPickLocation={handlePickedLocation} />
      <Button onPress={handleSavePlace}> Add Place </Button>
    </ScrollView>
  );
}

export default AddPlaces;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 20,
  },

  inputContainer: {
    rowGap: 6,
  },

  label: {
    color: Colors.primary500,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: Colors.primary100,
    flex: 1,
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
});

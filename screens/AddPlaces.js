import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../utils/color";
import { useState } from "react";
import ImagePicker from "../component/places/ImagePicker";

function AddPlaces() {
  const [enteredTitle, setEnteredTitle] = useState("");

  const handleTextInput = (enteredText) => {
    setEnteredTitle(enteredText);
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
      <ImagePicker />
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

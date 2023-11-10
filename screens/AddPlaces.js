import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../utils/color";

function AddPlaces() {
  return (
    <ScrollView style={styles.form}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}> Name </Text>
        <TextInput style={styles.input} />
      </View>
    </ScrollView>
  );
}

export default AddPlaces;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 8,
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

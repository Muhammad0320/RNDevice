import { StyleSheet, View } from "react-native";
import { Colors } from "../../utils/color";
import OutlinedButton from "../ui/OutLinedButton";

function LocationPicker() {
  const locatUserHandler = () => {};

  const pickOnMapHandler = () => {};

  return (
    <View>
      <View style={styles.previewContainer}> </View>
      <View>
        <OutlinedButton icon="location" onPress={locatUserHandler}>
          {" "}
          Locate User{" "}
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          {" "}
          Pick on Map{" "}
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  previewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary500,
    width: "100%",
    height: 200,
    marginVertical: 8,
    borderRadius: 6,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

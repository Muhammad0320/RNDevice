import { StyleSheet } from "react-native";
import MapView from "react-native-maps";

function Maps() {
  // 37.77472666989382, -122.44141910593166

  const region = {
    latitude: 37.77472666989382,
    longitude: -122.44141910593166,
    latitudeDelta: 0.0921,
    longitudeDelta: 0.0421,
  };

  return (
    <MapView style={styles.image} initialRegion={region}>
      {" "}
    </MapView>
  );
}

export default Maps;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

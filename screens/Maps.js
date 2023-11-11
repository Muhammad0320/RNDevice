import { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Maps() {
  // 37.77472666989382, -122.44141910593166

  const [selectedLocation, setSelectedLocation] = useState(null);

  const region = {
    latitude: 37.77472666989382,
    longitude: -122.44141910593166,
    latitudeDelta: 0.0921,
    longitudeDelta: 0.0421,
  };

  const handleClickMap = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;

    setSelectedLocation({ latitude, longitude });
  };

  return (
    <MapView
      style={styles.image}
      initialRegion={region}
      onPress={handleClickMap}
    >
      {selectedLocation && <Marker coordinate={{ ...selectedLocation }} />}
    </MapView>
  );
}

export default Maps;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

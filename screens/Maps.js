import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../component/ui/IconButton";

function Maps({ navigation }) {
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
      {selectedLocation && (
        <Marker title="Picked location" coordinate={{ ...selectedLocation }} />
      )}
    </MapView>
  );
}

const handlePickedLocation = useCallback(
  () => () => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location - by tapping on the map - first"
      );

      return;
    }

    navigation.navigate("AddPlace", { ...selectedLocation });
  },
  [navigation, selectedLocation]
);

useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: ({ tintColor }) => (
      <IconButton
        icon="save"
        color={tintColor}
        size={24}
        onPress={handlePickedLocation}
      />
    ),
  });
}, [navigation, handlePickedLocation]);

export default Maps;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
});

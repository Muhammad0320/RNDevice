import MapView from "react-native-maps";

function Maps() {
  // 37.77472666989382, -122.44141910593166

  const region = {
    latitude: 37.77472666989382,
    longitude: -122.44141910593166,
    latitudeDelta: 0.0921,
    longitudeDelta: 0.0421,
  };

  return <MapView initialRegion={region}> </MapView>;
}

export default Maps;

import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/color";
import OutlinedButton from "../ui/OutlinedButton";
import {
  PermissionStatus,
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { useEffect, useState } from "react";
import getLocationPreview from "../../utils/location";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

function LocationPicker({ onPickLocation }) {
  const [currentLocation, setCurrentLocation] = useState(null);
  const navigation = useNavigation();

  const routes = useRoute();

  const isFocused = useIsFocused();

  const [locationPermissioninfo, requestPermission] =
    useForegroundPermissions();

  const verifyPermission = async () => {
    if (locationPermissioninfo.status === PermissionStatus.UNDETERMINED) {
      const permission = await requestPermission();

      return permission.granted;
    }

    if (locationPermissioninfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permission",
        "This app needs permission to work effectively"
      );

      return false;
    }

    return true;
  };

  useEffect(() => {
    onPickLocation(currentLocation);
  }, [currentLocation, onPickLocation]);

  useEffect(() => {
    if (isFocused && routes.params) {
      const { ...pickedCoords } = routes.params;

      console.log(pickedCoords);

      setCurrentLocation(pickedCoords);
    }
  }, [isFocused, routes]);

  const locateUserHandler = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();

    setCurrentLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const pickOnMapHandler = () => {
    navigation.navigate("Map");
  };

  let locationPreview = (
    <Text style={styles.text}> No picked location yet! </Text>
  );

  if (currentLocation) {
    locationPreview = (
      <Image
        source={{
          uri: getLocationPreview(
            currentLocation.latitude,
            currentLocation.longitude
          ),
        }}
        style={styles.image}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.previewContainer}>{locationPreview}</View>
      <View style={styles.buttonContainer}>
        <OutlinedButton icon="location" onPress={locateUserHandler}>
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
  container: {
    marginBottom: 20,
  },

  previewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary200,
    width: "100%",
    height: 200,
    marginVertical: 12,
    borderRadius: 6,
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  text: {
    color: Colors.gray700,
    fontSize: 14,
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});

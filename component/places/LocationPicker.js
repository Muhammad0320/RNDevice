import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/color";
import OutlinedButton from "../ui/OutlinedButton";
import {
  PermissionStatus,
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { useState } from "react";
import getLocationPreview from "../../utils/location";

function LocationPicker() {
  const [currentLocation, setCurrentLocation] = useState({});

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

  const locateUserHandler = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();

    setCurrentLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });

    console.log(currentLocation);
  };

  const pickOnMapHandler = () => {};

  let locationPreview = (
    <Text style={styles.text}> No picked location yet! </Text>
  );

  if (currentLocation) {
    console.log(getLocationPreview(currentLocation.lat, currentLocation.lng));
    locationPreview = (
      <Image
        source={{
          uri: getLocationPreview(currentLocation.lat, currentLocation.lng),
        }}
      />
    );
  }

  return (
    <View>
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
});

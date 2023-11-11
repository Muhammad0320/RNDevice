import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/color";
import OutlinedButton from "../ui/OutLinedButton";
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
  };

  const pickOnMapHandler = () => {};

  return (
    <View>
      <View style={styles.previewContainer}>
        {currentLocation ? (
          <Image
            source={{
              uri: getLocationPreview(currentLocation.lat, currentLocation.lng),
            }}
          />
        ) : (
          <Text> No picked location yet! </Text>
        )}
      </View>
      <View>
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

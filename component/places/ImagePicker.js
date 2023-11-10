import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Alert, Button, Text, View } from "react-native";

function ImagePicker() {
  const [cameraPermisssionInfo, requestPermission] = useCameraPermissions();

  const verifyPermission = async () => {
    if (cameraPermisssionInfo.status === PermissionStatus.UNDETERMINED) {
      const PermissionResnponse = await requestPermission();

      return PermissionResnponse.granted;
    }

    if (cameraPermisssionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission",
        "You need to grant camera permission to use this app effectively"
      );

      return false;
    }

    return true;
  };

  const handleTakeImage = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      quality: 0.6,
      aspect: [16, 9],
    });
    console.log(image);
  };

  return (
    <View>
      <View>
        <Text> Odeh </Text>
      </View>

      <Button title="Take Image" onPress={handleTakeImage} />
    </View>
  );
}

export default ImagePicker;

import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/color";
import OutlinedButton from "../ui/OutlinedButton";

function ImagePicker({ onPickImage }) {
  const [cameraPermisssionInfo, requestPermission] = useCameraPermissions();

  const [previewImage, setPreviewImage] = useState("");

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
    setPreviewImage(image.assets[0].uri);
    onPickImage(image.assets[0].uri);
  };

  let preview = <Text> No image is taken yet </Text>;

  if (previewImage) {
    preview = <Image source={{ uri: previewImage }} style={styles.image} />;
  }

  return (
    <View>
      <View style={styles.preview}>{preview}</View>

      <OutlinedButton onPress={handleTakeImage} icon={"camera"}>
        {" "}
        Take image{" "}
      </OutlinedButton>
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
    marginVertical: 10,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: Colors.primary200,
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});

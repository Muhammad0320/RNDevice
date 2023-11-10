import { launchCameraAsync } from "expo-image-picker";
import { Button, View } from "react-native";

function ImagePicker() {
  const handleTakeImage = async () => {
    const image = await launchCameraAsync({
      allowsEditing: true,
      quality: 0.6,
      aspect: [16, 9],
    });
  };

  return (
    <View>
      <View> </View>

      <Button title="Take Image" onPress={handleTakeImage} />
    </View>
  );
}

export default ImagePicker;

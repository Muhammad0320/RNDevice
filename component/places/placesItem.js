import { Image, Pressable, Text, View } from "react-native";

function PlacesItem({ place, onPress }) {
  const { imageUri, address, title } = place;

  return (
    <Pressable onPress={onPress}>
      <Image source={{ uri: imageUri }} />

      <View>
        <Text> {title} </Text>
        <Text> {address} </Text>
      </View>
    </Pressable>
  );
}

export default PlacesItem;

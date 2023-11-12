import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../utils/color";

function PlacesItem({ place, onPress }) {
  const { imageUri, address, title } = place;

  return (
    <Pressable onPress={onPress} android_ripple={{ color: Colors.primary400 }}>
      <Image source={{ uri: imageUri }} />

      <View>
        <Text> {title} </Text>
        <Text> {address} </Text>
      </View>
    </Pressable>
  );
}

export default PlacesItem;

const style = StyleSheet.create({
  container: {
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: Colors.primary500,
    borderRadius: 6,
    elevation: 4,
    shadowOffset: { height: 1, width: 1 },
    shadowColor: "#000",
    shadowRadius: 4,
    shadowOpacity: 0.5,
    alignItems: "flex-start",
    columnGap: 10,
  },
  pressed: {
    opacity: 0.8,
  },

  info: {
    flex: 2,
    rowGap: 6,
    paddingVertical: 10,
  },
  image: {
    flex: 1,
    height: 100,
  },
  title: {
    color: Colors.gray700,
    fontSize: 18,
  },
  address: {
    color: Colors.gray700,
  },
});

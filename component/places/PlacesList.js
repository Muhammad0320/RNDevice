import { FlatList, StyleSheet, Text, View } from "react-native";
import PlacesItem from "./PlacesItem";
import { Colors } from "../../utils/color";

function PlacesList({ places }) {
  if (!places.length) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          {" "}
          You have no place right now! - start by adding some places{" "}
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={places}
      renderItem={({ item }) => <PlacesItem place={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});

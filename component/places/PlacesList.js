import { FlatList, StyleSheet, Text, View } from "react-native";

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

  return <FlatList data={places} />;
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
  },
});

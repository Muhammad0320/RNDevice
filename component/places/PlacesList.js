import { FlatList, StyleSheet, Text, View } from "react-native";
import PlacesItem from "./PlacesItem";
import { Colors } from "../../utils/color";
import { useNavigation } from "@react-navigation/native";

function PlacesList({ places }) {
  const navigation = useNavigation();

  const handlePlacePress = (placeId) => {
    navigation.navigate("PlaceDetails", {
      placeId,
    });
  };

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
      style={styles.container}
      data={places}
      renderItem={({ item }) => (
        <PlacesItem place={item} onPress={handlePlacePress} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  container: {
    margin: 18,
  },

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

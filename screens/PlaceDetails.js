import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../component/ui/OutlinedButton";
import { useEffect } from "react";
import { Colors } from "../utils/color";

function PlaceDetails({ route }) {
  const viewOnMapHandler = () => {};

  const { placeId } = route.params;

  useEffect(() => {
    // logic for fetching current place data
  }, [placeId]);

  return (
    <ScrollView style={styles.screen}>
      <Image style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}> Address </Text>
        </View>
        <OutlinedButton icon="map" onPress={viewOnMapHandler}>
          {" "}
          View on Map{" "}
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  image: {
    width: "100%",
    height: "35%",
    minHeight: 200,
  },

  textContainer: {
    alignItems: "center",
    textAlign: "center",
    marginVertical: 20,
    rowGap: 10,
  },

  addressContainer: {
    padding: 20,
  },

  address: {
    color: Colors.primary500,
    fontSize: 16,
    fontWeight: "bold",
  },
});

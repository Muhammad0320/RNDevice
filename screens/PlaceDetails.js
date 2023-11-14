import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../component/ui/OutlinedButton";
import { useEffect, useState } from "react";
import { Colors } from "../utils/color";
import { fetchPlaceById } from "../utils/database";

function PlaceDetails({ route, navigation }) {
  const [detailsData, setDetailsData] = useState();

  const { placeId } = route.params;

  useEffect(() => {
    // logic for fetching current place data

    const fetchDetailsData = async () => {
      const data = await fetchPlaceById(placeId);

      setDetailsData(data);

      navigation.setOptions({ title: data.title });
    };

    fetchDetailsData;
  }, [placeId]);

  const viewOnMapHandler = () => {
    navigation.navigate("Map", {
      initialCoords: {
        latitude: detailsData?.coords.latitude,
        longitude: detailsData?.coords.longitude,
      },
    });
  };

  if (!detailsData)
    return (
      <View style={styles.fallBackContainer}>
        {" "}
        <Text style={styles.fallBackText}> Loading details data... </Text>{" "}
      </View>
    );

  const { address, imageUri } = detailsData;

  return (
    <ScrollView style={styles.screen}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.textContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}> {address} </Text>
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
  fallBackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  fallBackText: {
    fontSize: 16,
    color: Colors.primary400,
  },

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

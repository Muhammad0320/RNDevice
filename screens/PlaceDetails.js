import { Image, ScrollView, Text, View } from "react-native";
import OutlinedButton from "../component/ui/OutlinedButton";
import { useEffect } from "react";

function PlaceDetails({ route }) {
  const viewOnMapHandler = () => {};

  const { placeId } = route.params;

  useEffect(() => {
    // logic for fetching current place data
  }, [placeId]);

  return (
    <ScrollView>
      <Image />
      <View>
        <View>
          <Text> Address </Text>
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

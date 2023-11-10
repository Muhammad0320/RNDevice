import { FlatList, Text, View } from "react-native";

function PlacesList({ places }) {
  if (!places.length) {
    return (
      <View>
        <Text>
          {" "}
          You have no place right now! - start by adding some places{" "}
        </Text>
      </View>
    );
  }

  return <FlatList data={places} />;
}

export default PlacesList;

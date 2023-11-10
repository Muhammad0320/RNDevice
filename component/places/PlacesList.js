import { FlatList } from "react-native";

function PlacesList({ places }) {
  return <FlatList data={places} />;
}

export default PlacesList;

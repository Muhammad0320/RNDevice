import { useEffect, useState } from "react";
import PlacesList from "../component/places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

function AllPlaces({ route }) {
  const [placeData, setPlaceData] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    route.params &&
      isFocused &&
      setPlaceData((currentPlace) => [...currentPlace, route.params.place]);
  }, [route.params, isFocused]);

  console.log(placeData, "odeh");

  return <PlacesList places={placeData} />;
}

export default AllPlaces;

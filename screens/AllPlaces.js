import { useEffect, useState } from "react";
import PlacesList from "../component/places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlaces } from "../utils/database";

function AllPlaces() {
  const [placeData, setPlaceData] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchPlacesData = async () => {
      const places = await fetchPlaces();

      setPlaceData(places);
    };

    isFocused && fetchPlacesData();
  }, [isFocused]);

  return <PlacesList places={placeData} />;
}

export default AllPlaces;

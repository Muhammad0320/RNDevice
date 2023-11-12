import { useEffect, useState } from "react";
import PlacesList from "../component/places/PlacesList";

function AllPlaces({ route }) {
  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    if ((route.params, placeData)) {
      setPlaceData((currentPlace) => [...currentPlace, placeData]);
    }
  }, [route, placeData]);

  return <PlacesList places={placeData} />;
}

export default AllPlaces;

import { useEffect, useState } from "react";
import PlacesList from "../component/places/PlacesList";

function AllPlaces({ route }) {
  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    route.params &&
      placeData &&
      setPlaceData((currentPlace) => [...currentPlace, route.params]);
  }, [route.params, placeData]);

  return <PlacesList places={placeData} />;
}

export default AllPlaces;

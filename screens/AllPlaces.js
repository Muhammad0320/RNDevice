import { useEffect, useState } from "react";
import PlacesList from "../component/places/PlacesList";

function AllPlaces({ route }) {
  const [placeData, setPlaceData] = useState([]);

  useEffect(() => {
    route.params.place &&
      placeData &&
      setPlaceData((currentPlace) => [...currentPlace, route.params.place]);
  }, [route.params.place, placeData]);

  console.log(route.params.place, "olosi");
  console.log(placeData, "odeh");

  return <PlacesList places={placeData} />;
}

export default AllPlaces;

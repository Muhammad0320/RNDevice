GOOGLE_API_KEY = "AIzaSyCFe5gDVVJtzXrpD8JxPJtK6m9_s9rcWPk";

function getLocationPreview(lat, lng) {
  const location = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=300x200&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}&signature=NvtmH2GBswiUgJap3U1HsZ7Qvak=`;

  return location;
}

export default getLocationPreview;

// https://maps.googleapis.com/maps/api/staticmap?center=8.4304979,4.5094368&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C8.4304979,4.5094368&key=AIzaSyCFe5gDVVJtzXrpD8JxPJtK6m9_s9rcWPk

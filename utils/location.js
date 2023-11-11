GOOGLE_API_KEY = "AIzaSyCFe5gDVVJtzXrpD8JxPJtK6m9_s9rcWPk";

function getLocationPreview(lat, lng) {
  const location = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=300x200&maptype=roadmap
    &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;

  return location;
}

export default getLocationPreview;

class Places {
  constructor(title, imageUri, location, id) {
    this.address = location.address;
    this.coords = {
      latitude: location.latitude,
      longitude: location.longitude,
    };
    this.title = title;
    this.imageUri = imageUri;
    this.id = id;
  }
}

export default Places;

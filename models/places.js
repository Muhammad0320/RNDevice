class Places {
  constructor(title, imageUri, location) {
    this.address = location.address;
    this.coords = {
      latitude: location.latitude,
      longitude: location.longitude,
    };
    this.title = title;
    this.imageUri = imageUri;
    this.id = `${Date.now() + Math.random()}`;
  }
}

export default Places;

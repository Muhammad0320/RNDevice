class Places {
  constructor(title, address, imageUri) {
    (this.address = address),
      (this.title = title),
      (this.imageUri = imageUri),
      (this.id = `${Date.now()}-${Math.random()}`);
  }
}

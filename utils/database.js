import * as SQLITE from "expo-sqlite";

const database = SQLITE.openDatabase("places.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        ` CREATE TABLE IF NOT EXISTS places  (

                    id INTERGER PRIMARY KEY NOT NULL,
                    title TEXT NOT NULL,
                    imageUri TEXT NOT NULL,
                    address TEXT NOT NULL,
                    latitude REAL NOT NULL,
                    longitude REAL NOT NULL

                ) `,
        [],
        () => {
          resolve();
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const insertPlace = (place) => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO places (title, imageUri, address, latitude, longitude) VALUES (?, ?, ?, ?, ?)`,
        [
          place.title,
          place.imageUri,
          place.address,
          place.coords.latitude,
          place.coords.longitude,
        ],
        (_, result) => {
          console.log(result);

          resolve(result);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

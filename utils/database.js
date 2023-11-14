import * as SQLITE from "expo-sqlite";
import Places from "../models/places";

const database = SQLITE.openDatabase("places.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS places (
          id INTEGER PRIMARY KEY NOT NULL,
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
  console.log(place);

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
          console.log("I see 🔥");
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const fetchPlaces = () => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM places`,
        [],
        (_, result) => {
          const place = [];

          for (const dp of result.rows._array) {
            place.push(
              new Places(dp.title, dp.imageUri, {
                address: dp.address,
                longitude: dp.longitude,
                latitude: dp.latitude,
              })
            );
          }

          resolve(place);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

export const fetchPlaceById = (id) => {
  const promise = new Promise((resolve, reject) => {
    database.transaction((tx) => {
      tx.executeSql(
        `SELECT  * FROM places WHERE id  = ?  `,
        [id],
        (_, result) => {
          resolve(result.rows._array[0]);
        },
        (_, error) => {
          reject(error);
        }
      );
    });
  });

  return promise;
};

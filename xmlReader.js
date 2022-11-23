const path = require("path");

const fs = require("fs");

const kmlFilePath = path.join(__dirname, "./kml/CTOS.kml");

const parseKML = require("parse-kml");

parseKML
  .toJson(kmlFilePath)
  .then((data) => {
    const mappedArray = data.features.map((coordinates) => {
      return {
        coordinates: {
          lat: coordinates.geometry.coordinates[1],
          lng: coordinates.geometry.coordinates[0],
        },
        cto: coordinates.properties.name,
      };
    });

    const content = mappedArray;

    try {
      fs.writeFileSync(
        path.join(__dirname, "./kml/kml.json"),
        JSON.stringify(content)
      );
      console.log("arquivo criado");
    } catch (err) {
      console.error(err);
    }

    //console.log(mappedArray);
  })
  .catch(console.error);

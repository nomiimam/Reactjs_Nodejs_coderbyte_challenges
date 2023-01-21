const https = require("https");

https.get(
  "https://coderbyte.com/api/challenges/json/age-counting",
  (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });
    response.on("end", () => {
      const JData = JSON.parse(data.toString());
      const splitedData = JData.data.split(", ");
      let ageCount = 0;

      for (let i = 0; i < splitedData.length; i++) {
        if (splitedData[i].indexOf("age=") !== -1) {
          let temp = splitedData[i].split("=");
          if (Number(temp[1]) >= 50) {
            ageCount++;
          }
        }
      }
      console.log(ageCount);
    });
  }
);

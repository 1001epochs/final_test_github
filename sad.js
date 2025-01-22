const https = require("https");
const fs = require("fs");

// Random function to fetch JSON data from a public API
function fetchAndSaveData(url, outputFile) {
  https
    .get(url, (response) => {
      let data = "";

      // Collect data chunks
      response.on("data", (chunk) => {
        data += chunk;
      });

      // Once all data is received
      response.on("end", () => {
        try {
          const jsonData = JSON.parse(data);
          fs.writeFile(outputFile, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
              console.error("Error writing to file:", err);
            } else {
              console.log(`Data saved to ${outputFile}`);
            }
          });
        } catch (error) {
          console.error("Error parsing JSON:", error.message);
        }
      });
    })
    .on("error", (err) => {
      console.error("Error fetching data:", err.message);
    });
}

console.error("testing");

console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

// Example usage
const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const outputFile = "output.json";

fetchAndSaveData(apiUrl, outputFile);

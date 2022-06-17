const express = require("express");
const axios = require("axios");
const cors = require('cors')

//Set up port
const PORT = 5000;

const app = express();

// Cross-origin requests
app.use(cors({
    origin: "*",
  }));
// Get data from cat api
app.get("/v1/breeds", async (req, res) => {
  try {
    await axios
      .get('https://api.thecatapi.com/v1/breeds')
      .then((response) => {
        res.send(response.data);
        console.log(response.data)
      });
  } catch (err) {
    console.log(err);
  }
});

// run server on port 5000
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
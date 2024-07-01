const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const dbConnection = require("./db");
app.use(express.json());

app.use("/api/cars/", require("./routes/carsRoute"));
app.use("/api/users/", require("./routes/usersRoute"));

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`NodeJS Server Started in Port ${port}!`));

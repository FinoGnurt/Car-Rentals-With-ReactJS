const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    "mongodb+srv://admin:123@carrentalsdb.03lrx4s.mongodb.net/car_rentals"
    // { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.on("connected", () => {
    console.log("MongoDB Connection Successful");
  });

  connection.on("error", () => {
    console.log("MongoDB Connection Error");
  });
}

connectDB();

module.exports = mongoose;

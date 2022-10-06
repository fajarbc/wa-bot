const mongoose = require("mongoose");

  mongoose.connect("mongodb://localhost:27017/wa-web");

const db = mongoose.connection;
db.on("open", _ => console.log("Database connected"))
db.on("error", e => console.log("Database connected", e))

module.exports = db;

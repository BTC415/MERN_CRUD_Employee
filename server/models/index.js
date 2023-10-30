
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB_LOCAL;
module.exports = db;
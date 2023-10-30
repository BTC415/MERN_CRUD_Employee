const mongodb = require('mongodb')
// CRUD

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'
const MongoClient = new mongodb.MongoClient(connectionURL, { useNewUrlParser: true })


MongoClient.connect((error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    console.log(`Connected correctly`)
});

module.exports = {
    connectToServer: function (callback) {
        client.connect(function (err, db) {
            // Verify we got a good "db" object
            if (db) {
                _db = db.db("employees");
                console.log("Successfully connected to MongoDB.");
            }
            return callback(err);
        });
    },

    getDb: function () {
        return _db;
    },
};
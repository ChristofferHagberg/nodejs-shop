const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

MongoClient.connect(
    "mongodb+srv://chris:Adgabar9@cluster0.cozqq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));

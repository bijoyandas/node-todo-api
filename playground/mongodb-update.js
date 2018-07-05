// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log('Unable to connect to the MongoDB Server');
        return;
    }
    console.log('Connected to MongoDB server');

    // findOneAndUpdate
    // db. collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b3cebc702352e065c0683e5")
    // }, {
    //     $set: {
    //         completed: false,
    //         text: 'Eat burgers'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });

    db. collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b3cc7e7a3d9403bbc0df0aa")
    }, {
        $set: {
            name: 'Bijoyan'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    });

    db.close();
});
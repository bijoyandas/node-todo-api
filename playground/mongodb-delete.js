// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        console.log('Unable to connect to the MongoDB Server');
        return;
    }
    console.log('Connected to MongoDB server');

    // deleteMany
    
    // Todos
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log('Unable to delete files');
    // });

    // User
    // db.collection('Users').deleteMany({
    //     name: 'Bijoyan'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result);
    // }).catch((err) => {
    //     console.log(err);
    // });

    // findOneAndDelete
    
    // Todos
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // }).catch((err) => {
    //     console.log(err);
    // })

    // Users
    db.collection('Users').findOneAndDelete({
        name: 'Mike'
    }).then((result) => {  
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })

    db.close();
});
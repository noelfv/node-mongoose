const mongoose=require('mongoose');
const Dishes=require('./models/dishes');

const url='mongodb://localhost:27017/';
const connect=mongoose.connect(url);

const dbname='conFusion';

connect.then((db)=>{

    console.log('Connected correctly to server');
    var newDish = Dishes({
        name:'Uthappizza',
        description:'test'
    });

    newDish.save().then((dish)=>{
        console.log(dish);

        return Dishes.find({}).exec();
    })
    .then((dishes)=>{
        console.log(dishes);

        return Dishes.remove({});

    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch((err)=>{
        console.log(err)
    })

});

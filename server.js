const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public/dist/public')); /////COMMENT OUT IF TESTING VIA POSTMAN

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rate_my_cakes_db', { useNewUrlParser: true });

const RatingSchema = new mongoose.Schema({
  content : String,
  numberrating : Number
})


const CakeSchema = new mongoose.Schema({
  bakername : String,
  imageurl : String,
  ratings : [RatingSchema]
})


const Cake = mongoose.model("Cake", CakeSchema);
const Rating= mongoose.model("Rating", RatingSchema);

app.get('/cakes', (req, res) => {
  Cake.find()
  .then((found) => {
    res.json(found);
  })
})

app.post('/cakes', (req, res) => {
  Cake.create(req.body)
  .then((returnStuff) => {
    res.json(returnStuff)
  })
})

app.get('/cakes/:id', (req, res) => {
  Cake.find({_id : req.params.id})
  .then((thecake)=>{
    res.json(thecake);
  })
})

app.post('/cakerating/:id', (req, res) => {

  req.body.numberrating = Number(req.body.numberrating);

  console.log(req.body.numberRating);
  Cake.updateOne({_id : req.params.id} ,  {
    $push : {ratings : req.body}})
  .then((data) => {
    res.json({success : true, data});
  })
  .catch(err => console.log('there was an error!', err))
})


app.delete('/deleteall', (req, res) => {
  Cake.deleteMany({})
  .then(() => {
    res.json({alldeleted : true})
  })
})




app.listen(8000, () => {"listening on port 8000"});
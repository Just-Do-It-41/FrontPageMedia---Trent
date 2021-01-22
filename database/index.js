const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose
  .connect('mongodb://localhost/NikeFrontPage')
  .then(() => {
    console.log('Connected to Mongoose!');
  });
const shoePictures = new Schema({
  colorway: String,
  media: [],
  sizes: [],
  stock: [],
  favorite: { type: Boolean, default: false },
});

const Shoes = mongoose.model('ShoePictures', shoePictures);

module.exports = Shoes;

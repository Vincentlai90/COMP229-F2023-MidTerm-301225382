/* Full name: Lai Minh Huy
   COMP 229 – Web Application Development
   Student ID: 301225382
   Date: 01/11/2023
   Created by Huy Lai. Copyright Fall 2023. All Rights reserved to Huy Lai
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);

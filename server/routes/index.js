/* Full name: Lai Minh Huy
   COMP 229 – Web Application Development
   Student ID: 301225382
   Date: 01/11/2023
   Created by Huy Lai. Copyright Fall 2023. All Rights reserved to Huy Lai
*/

// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => 
{
  res.render('content/index', 
  {
    title: 'Home',
    books: ''
  });
});

module.exports = router;

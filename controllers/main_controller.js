const db = require('../app/db.config');
const admin = db.admin
const devices = db.devices
const occupant = db.occupant
const channels = db.channels
const streams = db.streams
var Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

//const mustache   = require('mustache');
// Post a Customer


exports.rootpage = (req,res)=>{
  res.send({
    status:true,
    message:"Hello World"
  })
}


exports.register = (req,res)=>{
  // register Custormer
  occupant.create({
    deviceId:req.body.deviceid,
    guest_fname:req.body.guest_fname,
    guest_lname:req.body.guest_lname,
    guest_tag: req.body.guest_tag
  }).then(result=>{
    res.send({
      status:true,
      message:"user successfully assigned"
    })
  })
}

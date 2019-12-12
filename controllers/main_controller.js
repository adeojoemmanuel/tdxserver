const db = require('../app/db.config');
const admin = db.admin
const devices = db.devices
const occupant = db.occupant
const channels = db.channels
const streams = db.streams
var Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const path = require('path');


//const mustache   = require('mustache');
// Post a Customer


exports.rootpage = (req,res)=>{
  res.send({
    status:true,
    message:"Hello World"
  })
}

exports.regisistration = (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/tempview/register.html'))
}

exports.pdetail = (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/tempview/productdetail.html'))
}

exports.gridlist = (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/tempview/gridlist.html'))
}

exports.listlist = (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/tempview/listlist.html'))
}

exports.postad = (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/tempview/postad.html'))
}

exports.valueadd = (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/tempview/value-add.html'))
}

exports.valueindividual = (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/tempview/val-ind.html'))
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

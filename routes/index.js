﻿
/*
 * GET home page.
 */

 
exports.index = function(req, res){
  res.render('index', { title: 'A cool template' });
};

exports.demoData=function(req, res){
     
    var mongo=require("../server/modules/mongo-demo");
     
    mongo.getAll(function(err, items) {
        console.log('sending items');
        res.send(items);
        }); 
    };
      
    

    
exports.demoDataGetById=function(req, res){
     
    var mongo=require("../server/modules/mongo-demo");
   console.log('id=' + req.params.id);
    mongo.findById(req.params.id,function(err, item) {
        console.log('sending item');
        res.send(item);
        }); 
     };
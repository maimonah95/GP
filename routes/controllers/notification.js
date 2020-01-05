//import { isNull } from 'util';

var connection = require('./../config');

module.exports.Notification=function(req,res){
    var tourist_Email=req.params.tourist_Email;
    //var Password=req.body.Password;
    connection.query(' SELECT  *  FROM tourist_requist WHERE Status="accepted"  AND  tourist_Email = ? ',[tourist_Email], function (error, results1, fields) {
        if (error) {
            res.status(400).json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            res.status(200).json({
                status:true,
                accepted: results1,
                message:'this is your  accepted  request'
            });
           
        }

    });
}
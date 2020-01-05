//import { isNull } from 'util';

var connection = require('./../config');

module.exports.Notification1=function(req,res){
    var Tour_guide_Email=req.params.Tour_guide_Email;
    connection.query(' SELECT  *  FROM tourist_requist WHERE Status="cancelled"  AND  Tour_guide_Email = ? ',[Tour_guide_Email], function (error, results, fields) {
        if (error) {
            res.status(400).json({
                status:false,
                message:'there are some error with query'
            })
        }else{
                console.log(error);
               
                    res.status(200).json({
                        status:true,
                        cancelled: results,
                        message:'this is the cancelled  request'
                    });
        }

    });
}
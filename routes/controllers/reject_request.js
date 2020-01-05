var connection = require('./../config');

module.exports.reject_request=function(req,res){
    var Requist_ID=req.body.Requist_ID;
    connection.query('UPDATE  tourist_requist SET Status ="rejected"  WHERE Requist_ID = ?',[Requist_ID], function (error, results, fields) {
        if (error) {
            console.log(error);
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            connection.query(' SELECT  *  FROM tourist_requist WHERE  Requist_ID = ? ',[Requist_ID],function (error, results, fields){
                if (error) {
                    console.log(error);
                    res.status(400).json({
                        status:false,
                        message:'there are some error with query'
                    });
                }else{
                    res.status(200).json({
                        status:true,
                        data:results,
                        message:'your request has been rejected'
                    });
                }
            });
        }
    });

}
//the system disply  (Requist_ID, Status) for all tourist  requests

var connection = require('./../config');

module.exports.TouristViewRequists=function(req,res){
        var tourist_Email=req.query.tourist_Email;
    connection.query('SELECT Requist_ID, Status FROM tourist_requist WHERE tourist_Email = ?',[tourist_Email], function (error, results, fields) {
        if (error) {
            console.log(error);
            res.status(400).json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            console.log(error);
            res.status(200).json({
                status:true,
                data:results,
                message:'these is all your reqists'
            });
        }
    });
}
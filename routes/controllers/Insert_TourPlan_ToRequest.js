var connection = require('./../config');

module.exports.Insert_TourPlan_ToRequest=function(req,res){
var Requist_ID=req.body.Requist_ID;
var Tour_Plane_ID=req.body.Tour_Plane_ID;
    connection.query('UPDATE  tourist_requist SET  Tour_Plane_ID=?, Status="processing" WHERE Requist_ID = ?',[Tour_Plane_ID,Requist_ID], function (error, results, fields) {
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
                        message:'the tour plan added to your request'
                    });
                }
            });
        }
    });

}
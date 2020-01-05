//the system disply  request tourist information for the tour guide
//the system disply  request tourist information for the turist

var connection = require('./../config');

module.exports.ViewSpecificRequist=function(req,res){
    var Requist_ID=req.query.Requist_ID;
    connection.query('SELECT * FROM tourist_requist WHERE Requist_ID = ?',[Requist_ID], function (error, results, fields) {
        if (error) {
            //console.log(error);
            res.status(400).json({
                status:false,
                message:'there are some error with query'
            });
        }else
        {
            console.log(error);
            res.status(200).json({
                status:true,
                data:results,
                message:'this is your requist'
            });
        }
    });
}
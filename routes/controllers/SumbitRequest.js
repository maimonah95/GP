//the system insert  request to tourist


var connection = require('./../config');

module.exports.SumbitRequest=function(req,res){

    var tourist_Email=req.body.tourist_Email;
    var tour_city_ID=req.body.tour_city_ID;
    var member_no=req.body.member_no;
    var Extra_condetions=req.body.Extra_condetions;
    var Language=req.body.Language;
    var Date=req.body.Date;
    var tourism_ID=req.body.tourism_ID;
    var Price=member_no*50;
    connection.query('INSERT INTO tourist_requist (tour_city_ID,member_no,Extra_condetions,Language,Date ,Price,tourist_Email,tourism_ID) VALUES(?,?,?,?,?,?,?,?)',[tour_city_ID,member_no,Extra_condetions,Language,Date ,Price,tourist_Email,tourism_ID], function (error, results, fields) {
        if (error) {
            console.log(error);
            res.status(400).json({
                status:false,
                message:'there are some error with query'
            });
        }else{
            connection.query('SELECT Requist_ID,tour_city_ID,member_no,Extra_condetions,Language,Date,Price,tourist_Email,tourism_ID  FROM tourist_requist ORDER BY Requist_ID DESC LIMIT 1',function (error, results, fields){
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
                        message:'your request has been saved'
                    });
                }
            });
        }
    });

}
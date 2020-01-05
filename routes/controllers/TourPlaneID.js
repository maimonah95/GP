//the system disply  tour plan to tour guide from tour_plan table
var connection = require('./../config');

module.exports.TourPlneID=function(req,res){
var Requist_ID=req.query.Requist_ID;
    connection.query('SELECT ID FROM tour_plans ' +
        ' INNER JOIN  tourist_requist  ' +
        ' WHERE   tour_plans.City_ID =tourist_requist.tour_city_ID ' +
        ' AND   tour_plans.tourism_type_ID=tourist_requist.tourism_ID ' +
        ' AND Requist_ID= ? ',[Requist_ID], function (error, results, fields) {
        if (error) {
            console.log(error);
            res.status(400).json({
                status:false,
                message:'there are some error with query'
            })
        }else {
            if(results.length >0){
                    //console.log(error);
                    res.status(200).json({
                        status: true,
                        data: results,
                        message: 'this is your plan!!'
                    });
            } else {
                console.log(error);
                connection.query(' SELECT ID FROM tour_plans ' +
                    ' INNER JOIN  tourist_requist ' +
                    ' WHERE   tour_plans.City_ID =tourist_requist.tour_city_ID ' +
                    ' AND Requist_ID= ? ', [Requist_ID], function (error, results, fields) {
                    if (error) {
                        console.log(error);
                        res.status(400).json({
                            status: false,
                            message: 'there are some error with query'
                        })
                    } else {
                        console.log(error);
                        res.status(200).json({
                            status: true,
                            data: results,
                            message: 'this is your plan'
                        });
                    }
                });
            }
        }

    });
}
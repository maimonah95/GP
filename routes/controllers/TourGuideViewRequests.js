//the system disply  (Requist_ID, Status) for all requests coming to the tour guide


var connection = require('./../config');

module.exports.TourGuideViewRequests=function(req,res){
      var Tour_guide_E_mail=req.params.Tour_guide_E_mail;
    connection.query('SELECT * FROM tourist_requist' +
        ' JOIN tour_guide ' +
        ' INNER JOIN city  ON tourist_requist.tour_city_ID =city.ID ' +
        ' WHERE  ( tour_guide.TourCity =city.name  OR tour_guide.TourCity = "All cities" ) ' +
        ' AND (Status="processing"  OR Status="accepted") ' +
        ' AND  tour_guide.Tour_guide_E_mail = ?',[Tour_guide_E_mail], function (error, results, fields) {
        if (error) {
            console.log(error);
            res.status(400).json({
                status:false,
                message:'there are some error with query'
            })
        }else{
                res.status(200).json({
                    status: true,
                    data: results,
                    message: 'these is your requests'
                });

        }
    });
}
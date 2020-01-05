//the system disply  tour guide phone nomber and Email  the tourist


var connection = require('./../config');

module.exports.TourGuidePhoneNomber=function(req,res){
var Requist_ID=req.query.Requist_ID;
    connection.query(' SELECT tour_guide.TourGuide_EvaluationID, First_name, Last_name , Languages, phone_no,Email FROM user  ' +
        ' INNER JOIN tour_guide ON user.Email=tour_guide.Tour_guide_Email ' +
        ' INNER JOIN rating  ON tour_guide.Tour_guide_Email=rating.TourGuideEmail ' +
        ' INNER JOIN tourist_requist  ' +
        ' WHERE tourist_requist.Requist_ID = ?',[Requist_ID], function (error, results, fields) {
        if (error) {
            res.status(400).json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            res.status(200).json({
                status:true,
                data:results,
                message:'these is your profile'
            });
        }
    });
}
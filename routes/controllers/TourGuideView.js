//the system disply  user information information

var connection = require('./../config');

module.exports.TourGuideView=function(req,res){
   // console.log("param email",req.query.Email);
    connection.query('SELECT * FROM user LEFT JOIN tour_guide ON user.Email =tour_guide.Tour_guide_E_mail   WHERE user.Email = ?',[req.params.Email], function (error, results, fields) {
        if (error) {
            console.log(error);
            res.status(400).json({
                status:false,
                message:'there are some error with query'
            })

        }else{
            // console.log('id:', req.params.Email);
            res.status(200).json({
                status:true,
                data:results,
                message:'these is your profile'
            });
        }
    });
}
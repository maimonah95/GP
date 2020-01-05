var connection = require('./../config');

module.exports.AcceptRequest=function(req,res) {
    var Requist_ID=req.body.Requist_ID;
    var tour_guide_phone_no=req.body.tour_guide_phone_no;
    var Tour_guide_Email=req.body.Tour_guide_Email;
    connection.query('UPDATE  tourist_requist  SET Status="accepted", tour_guide_phone_no=? ,Tour_guide_Email=?  WHERE Requist_ID = ?', [tour_guide_phone_no,Tour_guide_Email,Requist_ID], function (error, results, fields) {
        if (error) {
            console.log(error);
            res.status(400).json({
                status: false,
                message: 'there are some error with query'
            })
        }else{
            connection.query('SELECT *  FROM tourist_requist  WHERE Requist_ID = ?',[Requist_ID],function (error, results, fields){
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
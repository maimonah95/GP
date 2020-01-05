var connection = require('./../config');

module.exports.TourGuideUpdateInfo=function(req,res){

    var Email=req.params.Email;
        var First_name=req.body.First_name;
        var Last_name=req.body.Last_name;
        var Age=req.body.Age;
        var Languages=req.body.Languages;
        var phone_no=req.body.phone_no;
        var City=req.body.City;
        var Password=req.body.Password;
        var TourCity=req.body.TourCity;

    connection.query(' UPDATE  user SET First_name=?,Last_name=? ,Age=? ,Languages=? ,phone_no=? ,City=?,Password=? WHERE Email = ?',[First_name,Last_name,Age,Languages,phone_no,City,Password,Email], function (error, results, fields) {
        if (error) {
                console.log(error);
                res.status(400).json({
                    status:false,
                    message:'there are some error with query'

                });
        }else{
            console.log(results);
            connection.query(' UPDATE tour_guide SET TourCity =?  WHERE Tour_guide_E_mail = ? ',[TourCity,Email], function (error, results, fields) {
                if (error){
                        console.log(error);
                        res.status(400).json({
                            status:false,
                            message:'there are some error with query'

                        });

                }else{
                    connection.query(' SELECT  *  FROM user WHERE  Email = ? ',[Email],function (error, results1, fields){
                        if (error) {
                            console.log(error);
                            res.status(400).json({
                                status:false,
                                message:'there are some error with query'
                            });
                        }else{
                            connection.query(' SELECT  *  FROM tour_guide WHERE  Tour_guide_E_mail = ? ',[Email],function (error, results2, fields){
                                if (error) {
                                    console.log(error);
                                    res.status(400).json({
                                        status:false,
                                        message:'there are some error with query'
                                    });
                                }else{
                                    res.status(200).json({
                                        status:true,
                                        user:results1,
                                        tour_guide:results2,
                                        message:'your update has been saved'
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }

    });

};




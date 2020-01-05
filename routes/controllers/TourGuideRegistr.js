var connection = require('./../config');

module.exports.TourGuideRegister=function(req,res){

    var First_name=req.body.First_name;
    var Last_name= req.body.Last_name;
    var Age=req.body.Age;
    var Languages=req.body.Languages;
    var phone_no=req.body.phone_no;
    var City=req.body.City;
    var Email=req.body.Email;
    var Password=req.body.Password;
    var TourCity=req.body.TourCity;
    var user_type=req.body.user_type;

    connection.query('INSERT INTO user (First_name,Last_name,Age,Languages,phone_no,City,Email,Password,user_type) VALUES(?,?,?,?,?,?,?,?,?)',[First_name,Last_name,Age,Languages,phone_no,City,Email,Password,user_type], function (error, results, fields) {
        if (error) {
            if(error.errno==1062){
                //console.log(error);
                res.status(400).json({
                    status:false,
                    message:'email in used'

                });
            }
            else {
                console.log(error);
                res.status(400).json({
                    status:false,
                    message:'there are some error with query'

                });
            }

        }else{
            console.log(results);
            connection.query('INSERT INTO tour_guide (TourCity,Tour_guide_E_mail) VALUES(?,?) ',[TourCity,Email], function (error, results, fields) {
                if (error) {
                    if(error.errno==1062){
                        //console.log(error);
                        res.status(400).json({
                            status:false,
                            message:'email in used'

                        });
                    }
                    else {
                        console.log(error);
                        res.status(400).json({
                            status:false,
                            message:'there are some error with query'

                        });
                    }

                }else{
                    console.log(error);
                    res.status(200).json({
                        status:true,
                        data:results,
                        message:'user registered sucessfully'
                    });
                }
            });

        }

    });

};




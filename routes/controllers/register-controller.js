var connection = require('./../config');

module.exports.register=function(req,res){

    var use={
        "First_name":req.body.First_name,
        "Last_name":req.body.Last_name,
        "Age":req.body.Age,
        "Languages":req.body.Languages,
        "phone_no":req.body.phone_no,
        "City":req.body.City,
        "Email":req.body.Email,
        "Password":req.body.Password,
        "user_id":req.body.user_id
    };

    connection.query('INSERT INTO user SET ?',use, function (error, results, fields) {
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
            res.status(200).json({
                status:true,
                data:results,
                message:'user registered sucessfully'
            });
        }
    });
};
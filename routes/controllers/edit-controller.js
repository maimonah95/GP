var connection = require('./../config');

module.exports.edit=function(req,res){
     var Email=req.body.Email;
    var use={
        "First_name":req.body.First_name,
        "Last_name":req.body.Last_name,
        "Age":req.body.Age,
        "Languages":req.body.Languages,
        "phone_no":req.body.phone_no,
        "City":req.body.City,
        "Email":req.body.Email,
        "Password":req.body.Password
    }

    connection.query('UPDATE  user SET ? WHERE Email = ?',[use,Email], function (error, results, fields) {
        if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            connection.query(' SELECT  *  FROM user WHERE  Email = ? ',[Email],function (error, results, fields){
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
                        message:'your update has been saved'
                    });
                }
            });
        }
    });

}
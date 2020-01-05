var connection = require('./../config');

module.exports.LogIn=function(req,res){
    var Email=req.body.Email;
    var Password=req.body.Password;
    connection.query('SELECT * FROM user WHERE Email = ?',[Email], function (error, results, fields) {
        if (error) {
            res.status(400).json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            if(results.length >0){
                if(Password===results[0].Password){
                    res.status(200).json({
                        status:true,
                        data: results,
                        message:'successfully authenticated'
                    });
                }else{
                    res.status(400).json({
                        status:false,
                        data: results,
                        message:"Email and password does not match"
                    });
                }
            }
            else{
                res.status(400).json({
                    status:false,
                    message:"Email does not exits"
                });
            }
        }
    });
}
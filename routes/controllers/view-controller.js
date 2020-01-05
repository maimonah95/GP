//the system disply  user information information

var connection = require('./../config');

module.exports.view=function(req,res){
   var Email=req.query.Email;
    connection.query('SELECT * FROM user WHERE Email = ?',[Email], function (error, results, fields) {
        if (error) {
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



var connection = require('./../config');
module.exports.Notification2=function(req,res){
    var tourist_Email=req.params.tourist_Email;
    //var rat="";
    //$scope._ = _;
    //var Password=req.body.Password;
    connection.query(' SELECT  *  FROM tourist_requist WHERE Status="completed" AND isnull(`rating`) AND  tourist_Email = ? ',[tourist_Email], function (error, results, fields) {
        if (error) {
             res.status(400).json({
            status:false,
            message:'there are some error with query'
                })
            }else{
               // console.log(error);
               if(results.length >0){
               // if (typeof results[0].rating === 'undefined' && results[0].rating === isNullOrUndefined()){
        res.status(200).json({
            status:true,
            completed: results,
            message:'you have completed and not rating request'
        });
}else{
    connection.query(' SELECT  *  FROM tourist_requist WHERE Status="completed" AND !isnull(`rating`) AND  tourist_Email = ? ',[tourist_Email], function (error, results, fields) {
        if (error) {
             res.status(400).json({
            status:false,
            message:'there are some error with query'
                });
            }else{
    res.status(200).json({
        status:true,
        completed: results,
        message:"you dont have completed and not rating request "
    });
}
    });
    }
               }

    });
}
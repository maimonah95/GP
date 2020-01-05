var connection = require('./../config');

module.exports.insert=function(req,res){

       var place_name=req.body.place_name;
    var Fplace_naturalID=req.body.Fplace_naturalID;
    var Splace_naturalID=req.body.Splace_naturalID;
    var Fplace_descriptionsID=req.body.Fplace_descriptionsID;
    var Splace_descriptionsID=req.body.Splace_descriptionsID;
    var Tplace_descriptionsID=req.body.Tplace_descriptionsID;
    var Four_place_descriptionsID=req.body.Four_place_descriptionsID;
    var CityID=req.body.CityID;
    var time_take=req.body.time_take;
    var exstra_note=req.body.exstra_note;
    var max_age=req.body.max_age;
    var min_age=req.body.min_age;
    var genderID=req.body.genderID;
    connection.query('INSERT INTO place_info(place_name,Fplace_naturalID,Splace_naturalID,Fplace_descriptionsID,Splace_descriptionsID,Tplace_descriptionsID,Four_place_descriptionsID,CityID,time_take,exstra_note,max_age,min_age,genderID) ' +
        '  VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) ',[place_name,Fplace_naturalID,Splace_naturalID,Fplace_descriptionsID,Splace_descriptionsID,Tplace_descriptionsID,Four_place_descriptionsID,CityID,time_take,exstra_note,max_age,min_age,genderID], function (error, results, fields) {
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
                message:'thank you, the place has been successfully added to the database'
            });
        }
    });
};
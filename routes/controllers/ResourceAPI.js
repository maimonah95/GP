var connection = require('./../config');
//var sqlite3 = require("sqlite3").verbose();


module.exports.ResourceAPI=function(req,res) {
   connection.query('SELECT * FROM city ', function (error, results1, fields) {
        if (error) {
            console.log(error);
            res.status(400).json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            connection.query('SELECT * FROM description ', function (error, results2, fields) {
                if (error) {
                    console.log(error);
                    res.status(400).json({
                        status: false,
                        message: 'there are some error with query'
                    })
                } else {
                    connection.query('SELECT * FROM gender ', function (error, results3, fields) {
                        if (error) {
                            console.log(error);
                            res.status(400).json({
                                status:false,
                                message:'there are some error with query'
                            })
                        }else {

                            connection.query('SELECT * FROM health_condition', function (error, results4, fields) {
                                if (error) {
                                    console.log(error);
                                    res.status(400).json({
                                        status:false,
                                        message:'there are some error with query'
                                    })
                                }else {
                                    connection.query('SELECT * FROM place_natural ', function (error, results5, fields) {
                                        if (error) {
                                            console.log(error);
                                            res.status(400).json({
                                                status:false,
                                                message:'there are some error with query'
                                            })
                                        }else{
                                            connection.query('SELECT * FROM place_status', function (error, results6, fields) {
                                                if (error) {
                                                    console.log(error);
                                                    res.status(400).json({
                                                        status:false,
                                                        message:'there are some error with query'
                                                    })
                                                }else{

                                                    connection.query('SELECT * FROM tourism_type', function (error, results7, fields) {
                                                        if (error) {
                                                            console.log(error);
                                                            res.status(400).json({
                                                                status:false,
                                                                message:'there are some error with query'
                                                            })
                                                        }else{
                                                            connection.query('SELECT * FROM user_type', function (error, results8, fields) {
                                                                if (error) {
                                                                    console.log(error);
                                                                    res.status(400).json({
                                                                        status:false,
                                                                        message:'there are some error with query'
                                                                    })
                                                                }else{
                                                                    //console.log(results);
                                                                    res.status(200).json({
                                                                        //console.log(results);
                                                                        status:true,
                                                                        city:results1,
                                                                        description:results2,
                                                                        gender:results3,
                                                                        health_condition:results4,
                                                                        place_natural:results5,
                                                                        place_status:results6,
                                                                        tourism_type:results7,
                                                                        user_type:results8,
                                                                        // message:'these is the data'
                                                                    });
                                                                }
                                                            });

                                                        }
                                                    });
                                                }
                                            });

                                        }
                                    });

                                }
                            });
                        }
                    });
                }
            });
            }
    });
}

var connection = require('./../config');

module.exports.rate=function(req,res) {
    var Tour_Plane_ID = req.body.Tour_Plane_ID;
    var Tour_guide_Email = req.body.Tour_guide_Email;
    var rating_tour_guide = req.body.rating_tour_guide;
    var Tour_guide_Evaluation = req.body.Tour_guide_Evaluation;
    var rating_tour_plan = req.body.rating_tour_plan;
    var Tour_Plan_Evaluation = req.body.Tour_Plan_Evaluation;
    var Requist_ID = req.body.Requist_ID;
    connection.query('INSERT INTO rating (Tour_guide_Evaluation,rating_tour_guide,rating_tour_plan,Tour_Plan_Evaluation) VALUES(?,?,?,?) ', [Tour_guide_Evaluation, rating_tour_guide, rating_tour_plan, Tour_Plan_Evaluation], function (error, results1, fields) {
        if (error) {
            res.status(400).json({
                status: false,
                message: 'there are some error with query'
            });
        } else {
            connection.query(' UPDATE tour_guide SET TourGuide_EvaluationID =? WHERE Tour_guide_E_mail = ? ', [(+[rating_tour_guide]) / 2, Tour_guide_Email], function (error, results2, fields) {
                if (error) {
                    console.log(error);
                    res.status(400).json({
                        status: false,
                        message: 'there are some error with query'

                    });

                } else {
                    console.log('tour guide rating sucessfully');

                    connection.query(' UPDATE tour_plans SET Tour_Plan_EvaluationID =? WHERE ID = ? ', [(+[rating_tour_plan]) / 2, Tour_Plane_ID], function (error, results3, fields) {
                        if (error) {
                            console.log(error);
                            res.status(400).json({
                                status: false,
                                message: 'there are some error with query'

                            });

                        } else {
                            connection.query('SELECT * FROM `rating` ORDER BY rating_ID DESC LIMIT 1', function (error, results, fields) {
                                    if (error) {
                                        console.log(error);
                                        res.status(400).json({
                                            status: false,
                                            message: 'there are some error with query'

                                        });
                                    } else {
                                        var m =0;
                                        m= results[0].rating_ID;
                                        connection.query(' UPDATE tourist_requist SET rating =? WHERE Requist_ID= ? ', [m, Requist_ID], function (error, results4, fields) {
                                            if (error) {
                                                console.log(error);
                                                res.status(400).json({
                                                    status: false,
                                                    message: 'there are some error with query'

                                                });

                                            } else {
                                                console.log(error);
                                                res.status(200).json({
                                                    status: true,
                                                    data: results1,
                                                    data2: results2,
                                                    data3: results3,
                                                    data4: results4,
                                                    message: 'tour plan rating sucessfully'
                                                });
                                            }
                                        });
                                    }});
                        }});
                }});
        }});
}
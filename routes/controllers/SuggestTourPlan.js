//the system disply  tour plan to tour guide from tour_plan table
var connection = require('./../config');

module.exports.SuggestTourPlan=function(req,res) {
    //res.render("SuggestTourPlan");
    var ID=req.params.ID;
      connection.query(' SELECT place_name1 as first_plans1,time1 ,place1.exstra_note AS exstra_note1,place1.max_age AS max_age1,place1.min_age AS min_age1 ,gender1.Name AS gendertype, FP1.helth_name AS helth_FP_con1, FP2.helth_name AS helth_FP_con2,FP3.helth_name AS helth_FP_con3 '+
   ' FROM tour_plans '+
   ' INNER JOIN place_info place1 ON tour_plans.place_name1 = place1.place_name '+
   ' INNER JOIN gender gender1 ON place1.genderID=gender1.ID '+
   ' INNER JOIN health_condition FP1 ON place1.Fhealth_constrainID = FP1.ID '+
   ' INNER JOIN health_condition FP2 ON place1.Shealth_constrainID = FP2.ID '+
   ' INNER JOIN health_condition FP3 ON place1.Thealth_constrainID = FP3.ID '+
   ' WHERE tour_plans.ID = ? ',[ID], function (error, results1, fields) {
             if (error) {
                      console.log(error);
                      res.status(400).json({
                      status: false,
                      message: 'there are some error with query'
                    })
             }else{
                         connection.query(' SELECT place_name2 as second_place,time2 as time2 ,place2.exstra_note AS exstra_note2,place2.max_age AS max_age2,place2.min_age AS min_age2 ,gender.Name AS gendertype2, FP12.helth_name AS helth_2P_con1, FP22.helth_name AS helth_2P_con2,FP32.helth_name AS helth_2P_con3 ' +
                             ' FROM tour_plans' +
                             ' JOIN place_info place2 ON tour_plans.place_name2 = place2.place_name ' +
                             ' JOIN gender  ON place2.genderID=gender.ID ' +
                             ' JOIN health_condition FP12 ON place2.Fhealth_constrainID = FP12.ID ' +
                             ' JOIN health_condition FP22 ON place2.Shealth_constrainID = FP22.ID ' +
                             ' JOIN health_condition FP32 ON place2.Thealth_constrainID = FP32.ID ' +
                             ' WHERE tour_plans.ID = ? ',[ID], function (error, results2, fields) {
                             if (error) {
                                 console.log(error);
                                 res.status(400).json({
                                     status: false,
                                     message: 'there are some error with query'
                                 })
                             } else{
                                 connection.query(' SELECT place_name3 as tour_plans3,time3 ,place3.exstra_note AS exstra_note3,place3.max_age AS max_age3,place3.min_age AS min_age1 ,gender.Name AS gendertype3, FP13.helth_name AS helth_3P_con1, FP23.helth_name AS helth_3P_con2,FP33.helth_name AS helth_3P_con3 '+
                                     ' FROM tour_plans '+
                                     ' INNER JOIN place_info place3 ON tour_plans.place_name3 = place3.place_name '+
                                     ' INNER JOIN gender  ON place3.genderID=gender.ID '+
                                     ' INNER JOIN health_condition FP13 ON place3.Fhealth_constrainID = FP13.ID '+
                                     ' INNER JOIN health_condition FP23 ON place3.Shealth_constrainID = FP23.ID '+
                                     ' INNER JOIN health_condition FP33 ON place3.Thealth_constrainID = FP33.ID '+
                                     ' WHERE tour_plans.ID = ?',[ID], function (error, results3, fields) {
                                     if (error) {
                                         console.log(error);
                                         res.status(400).json({
                                             status: false,
                                             message: 'there are some error with query'
                                         })
                                     } else{
                                         connection.query(' SELECT place_name4 as tour_plans4,time4 ,place4.exstra_note AS exstra_note4,place4.max_age AS max_age4,place4.min_age AS min_age4 ,gender.Name AS gendertype4, FP14.helth_name AS helth_4P_con1, FP24.helth_name AS helth_4P_con2,FP34.helth_name AS helth_4P_con3 '+
                                             ' FROM tour_plans '+
                                             ' INNER JOIN place_info place4 ON tour_plans.place_name4 = place4.place_name '+
                                             ' INNER JOIN gender  ON place4.genderID=gender.ID '+
                                             ' INNER JOIN health_condition FP14 ON place4.Fhealth_constrainID = FP14.ID '+
                                             ' INNER JOIN health_condition FP24 ON place4.Shealth_constrainID = FP24.ID '+
                                             ' INNER JOIN health_condition FP34 ON place4.Thealth_constrainID = FP34.ID '+
                                             ' WHERE tour_plans.ID = ?',[ID], function (error, results4, fields) {
                                             if (error) {
                                                 console.log(error);
                                                 res.status(400).json({
                                                     status: false,
                                                     message: 'there are some error with query'
                                                 })
                                             } else {
                                                 connection.query(' SELECT place_name5 as tour_plans5,time5 ,place5.exstra_note AS exstra_note5,place5.max_age AS max_age5,place5.min_age AS min_age5 ,gender.Name AS gendertype5, FP15.helth_name AS helth_5P_con1, FP25.helth_name AS helth_5P_con2,FP35.helth_name AS helth_5P_con3 ' +
                                                     ' FROM tour_plans ' +
                                                     ' INNER JOIN place_info place5 ON tour_plans.place_name5 = place5.place_name ' +
                                                     ' INNER JOIN gender  ON place5.genderID=gender.ID ' +
                                                     ' INNER JOIN health_condition FP15 ON place5.Fhealth_constrainID = FP15.ID ' +
                                                     ' INNER JOIN health_condition FP25 ON place5.Shealth_constrainID = FP25.ID ' +
                                                     ' INNER JOIN health_condition FP35 ON place5.Thealth_constrainID = FP35.ID ' +
                                                     ' WHERE tour_plans.ID = ?', [ID], function (error, results5, fields) {
                                                     if (error) {
                                                         console.log(error);
                                                         res.status(400).json({
                                                             status: false,
                                                             message: 'there are some error with query'
                                                         })
                                                     } else {
                                                         res.status(200).json({
                                                             status: true,
                                                             place1: results1,
                                                             place2: results2,
                                                             place3: results3,
                                                             place4: results4,
                                                             place5: results5,
                                                             message: 'this is the plan'
                                                         });
                                                     }});
                                             }});
                                     }});
                             }});
                     }});

}
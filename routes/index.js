var express = require('express');
var router = express.Router();
var request = require('request-promise');
var cors=require('cors'); 
var bodyParser=require('body-parser');
var app = express();

var LogInController=require('./controllers/LogIn-controller');
var registerController=require('./controllers/register-controller');
var TourGuideRegisterController=require('./controllers/TourGuideRegistr');
var resetController=require('./controllers/reset-controller');
var insertplaceController=require('./controllers/insert_tourism_places');
var editController=require('./controllers/edit-controller');
var viewController=require('./controllers/view-controller');
var ratingController=require('./controllers/rating-controller');
var touristCancelRequestController=require('./controllers/tourist_cancel_request');
var SumbitRequestController=require('./controllers/SumbitRequest');
var TourGuideViewRequestsController=require('./controllers/TourGuideViewRequests');
var ViewSpecificRequistController=require('./controllers/ViewSpecificRequist');
var ViewTourPlneIDController=require('./controllers/TourPlaneID');
var TouristViewRequistsController=require('./controllers/TouristViewRequists');
var TourGuidePhoneNomberController=require('./controllers/TourGuidePhoneNomber');
var SuggestTourPlanController=require('./controllers/SuggestTourPlan');
var AcceptRequestController=require('./controllers/AcceptRequest');
var TourGuideViewController=require('./controllers/TourGuideView');
var Insert_TourPlan_ToRequestController=require('./controllers/Insert_TourPlan_ToRequest');
var reject_requestController=require('./controllers/reject_request');
var ResourceAPIController=require('./controllers/ResourceAPI');
var FinishRequestController=require('./controllers/finish_request');
var TourGuideUpdateInfoController=require('./controllers/TourGuideUpdateInfo');
var NotificationController=require('./controllers/Notification');
var Notification1Controller=require('./controllers/notification1');
var Notification2Controller=require('./controllers/Notification2');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
//app.use(function(req, res, next) {
 // res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  //next();
//});

app.use(cors({origin:'*'}))


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/TourGuideRegister',TourGuideRegisterController.TourGuideRegister);
app.post('/api/LogIn',LogInController.LogIn);
app.post('/api/rate',ratingController.rate);
app.put('/api/edit',editController.edit);
app.get('/api/view',viewController.view);
app.post('/api/reset',resetController.reset);
app.post('/api/insertPlace',insertplaceController.insert);
app.put('/api/touristcancel',touristCancelRequestController.touristCancelRequest);
app.post('/api/SumbitRequest',SumbitRequestController.SumbitRequest);
app.get('/api/TourGuideViewRequests',TourGuideViewRequestsController.TourGuideViewRequests);
app.get('/api/ViewSpecificRequest/:Requist_ID',ViewSpecificRequistController.ViewSpecificRequist);
app.get('/api/ViewTourPlneID',ViewTourPlneIDController.TourPlneID);
app.get('/api/TouristViewRequists',TouristViewRequistsController.TouristViewRequists);
app.get('/api/TourGuidePhoneNomber/:tour_guide_phone_no',TourGuidePhoneNomberController.TourGuidePhoneNomber);
app.get('/api/SuggestTourPlan:ID',SuggestTourPlanController.SuggestTourPlan);
app.put('/api/AcceptRequest',AcceptRequestController.AcceptRequest);
app.get('/api/TourGuideViewinfo',TourGuideViewController.TourGuideView);
app.put('/api/Insert_TourPlan_ToRequest',Insert_TourPlan_ToRequestController.Insert_TourPlan_ToRequest);
app.put('/api/reject_request',reject_requestController.reject_request);
app.get('/api/ResourceAPI',ResourceAPIController.ResourceAPI);
app.put('/api/FinishRequest',FinishRequestController.FinishRequest);
app.put('/api/TourGuideUpdateInfo',TourGuideUpdateInfoController.TourGuideUpdateInfo);
app.get('/api/Notification/:tourist_Email',NotificationController.Notification);
app.get('/api/Notification1/:Tour_guide_Email',Notification1Controller.Notification1);
app.get('/api/Notification2/:tourist_Email',Notification2Controller.Notification2);

app.use('/api',router);
app.listen(3000,process.env.OPENSHIFT_NODEJS_IP||process.env.IP||'127.0.0.1');

module.exports = router;

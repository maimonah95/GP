var nodemailer = require('nodemailer');
var connection = require('./../config');
//var sgTransport = require('nodemailer-sendgrid-transport');
module.exports.reset=function(req,res) {

var Email=req.query.Email;
var Password=req.query.Password;
    var smtpConfig = {
        host: 'smtp.sendgrid.net',
        port: 465,
        secure: true, // use SSL
        auth: {
  /*  var client = nodemailer.createTransport({
        service: 'smtp.sendgrid.net',
        ports:465,
        auth: {*/
            user: 'apikey',
           pass:'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'
            //
        },
       tls:{
            rejectUnauthorized:false
        }
    };

    var transporter = nodemailer.createTransport(smtpConfig);
    var email = {
       // to: 'mim95s@hotmail.com',
        //to:req.body.Email,
        from: 'guidemeapp.com',
        to:Email,
        subject: 'Retrive password',
        text: 'dear GUIDE ME user',
        html: '<p>the following is your password:' + '<strong>' + Password + '</strong></p>'
    };
    connection.query('SELECT * FROM user WHERE Email = ?',[Email], function (error, results, fields) {
        if (error) {
            res.status(400).json({
                status:false,
                message:'there are some error with query'
            })
        }else{
            if(results.length >0) {
                transporter.sendMail(email, function (error, info) {
                    if (error) {
                        // console.log('cant send'),
                        console.log(error);
                        return;
                    }
                    else {
                        console.log('Message sent: ' + info.response);
                        transporter.close();
                        connection.query('UPDATE  user SET Password=? WHERE Email = ?',[Password,Email], function (error, results, fields) {
                            if (error) {
                                console.log(error);
                                res.status(400).json({
                                    status:false,
                                    message:'there are some error with query'

                                });

                            }else{
                                console.log(error);
                                res.status(200).json({
                                    status:true,
                                    data:results,
                                    message:'password updated sucessfully'
                                });
                            }
                        });
                            }

                    }
                );
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
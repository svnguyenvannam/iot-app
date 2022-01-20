var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail',
    pass: 'yourpass'
  }
});

var mailOptions = {
  from: 'youremail',
  to: 'targetemail',
  subject: 'Sending Email using Node.js',
  text: 'nội dung'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
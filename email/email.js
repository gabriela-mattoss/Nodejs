var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'gabireis96328422@gmail.com',
    pass: 'oljumorsuqeoigzj'
  }
});

var mailOptions = {
  from: 'gabireis96328422@gmail.com',
  to: 'arthurnichele08@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
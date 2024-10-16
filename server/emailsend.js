const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    secure: true,
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
        user: 'skin.ai2024@gmail.com',    
        pass: 'pana spre gxji ozzp'        
    }
});

function sendEmail(email, sub, msg) {
    // let to = email;
    transporter.sendMail({
        from: 'skin.ai2024@gmail.com',  
        to: email,                         
        subject: sub,                  
        html:msg                       
    }, (error, info) => {
        if (error) {
            console.log('Error occurred: ', error);
        } else {
            console.log('Email Sent: ', info.messageId);
        }
    });
}


module.exports = sendEmail;

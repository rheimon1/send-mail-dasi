const nodemailer = require('nodemailer')

const dotenv = require('dotenv');
dotenv.config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const mailOptions = {
    from: 'vitormartinscruz.dev@gmail.com',
    to: 'vitormartinscruz@usp.br', // color a lista com quem vai receber o kit
    subject: 'Psiu! Só passei pra te dar um aviso.', 
    html: {
        path: 'src/views/mail.html'
    }
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
        console.log(err)
    else
        console.log(info);
})
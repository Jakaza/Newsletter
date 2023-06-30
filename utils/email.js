const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
})

async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: 'germanwise10@gmail.com',
        to: "goodnessjakazac@gmail.com",
        subject: "Hello ✔", // Subject line
        text: "Hello world? ✔", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
}


module.exports = main
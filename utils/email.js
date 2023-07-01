const nodemailer = require('nodemailer')
const subcriptionSuccessTemplate = require('./emailTemplate')
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

const sendSubcriptionFeedback = async (email, id) => {
    const subject = "Subcription for tech news(4H)"
    const publisherEmail = process.env.PUBLISHER
    const info = await transporter.sendMail({
        from: `${publisherEmail}`,
        to: `${email}`,
        subject: `${subject}`, // Subject line
        text: "Hello world? ✔", // plain text body
        html: subcriptionSuccessTemplate(id), // html body
    });
    console.log("Message sent: %s", info.messageId)
}

// async function main() {
//     // send mail with defined transport object
//     const info = await transporter.sendMail({
//         from: 'germanwise10@gmail.com',
//         to: "goodnessjakazac@gmail.com",
//         subject: "Hello ✔", // Subject line
//         text: "Hello world? ✔", // plain text body
//         html: "<b>Hello world?</b>", // html body
//     });

//     console.log("Message sent: %s", info.messageId);
// }


module.exports = sendSubcriptionFeedback
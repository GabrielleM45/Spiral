const nodeMailer = require("nodemailer");
const defaultEmailData = { from: "noreply@node-react.com"};


// Functionality not quite working
exports.sendEmail = emailData=> {
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "",
            pass: ""
        }
    });
    return (
        transporter.sendMail(emailData)
        .then(info => console.log(`message sent: ${info.response}`))
        .catch(err => console.log(`An error has occured ${err}`))
    )
}
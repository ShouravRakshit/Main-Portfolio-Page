const nodemMailer = require("nodemailer");
var sendGridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemMailer.createTransport(
    sendGridTransport({
        auth: {
            api_key: process.env.API_SENDGRID,
        }
    })
)

const sendEmailController = (req, res) =>{

    try{
        const {name, email, msg} = req.body;
        
        // validation
        if (!name || !email || !msg) {
            return res.status(500).send({
                success: false,
                message: "Provide all the details"
            })
        }

        transporter.sendMail({
            to: "shouravivan1000@gmail.com",
            from: "shouravivan@gmail.com",
            subject: 'Hi there',
            html: `
            <h5>Detail Information</h5>
            <ul>
              <li><p>Name : ${name}</p></li>
              <li><p>Email : ${email}</p></li>
              <li><p>Message : ${msg}</p></li>
            </ul>
          `,
        })

        return res.status(200).send({
            success: true,
            message: "Your Message was Send Properly"
        })
    } catch(error){
        console.log(error)
        return resizeBy.status(500).send({
            success: false,
            message: "Send EMail API Error",
            error
        })
    }

}

module.exports = {sendEmailController};
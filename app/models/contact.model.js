import { Schema, model } from "mongoose"
import transporter from "../../config/mail.config.js"
import getMailTemplate from "../templates/mail.template.js"

const schema = new Schema({
    name: String,
    email: String,
    phone: Number,
    message: String
},
    {
        timestamps: true
    }
)

schema.post('save', async function (result, next) {
    transporter().sendMail({
        from: `Admin ${process.env.EMAIL_USER}`,
        to: `${process.env.ADMIN_MAIL}`,
        subject: "New Contact",
        text: "New contact submission mail",
        html: getMailTemplate(this.name, this.email, this.phone, this.message, this.createdAt.toLocaleString())
    })
        .then(() => {
            console.log("Email sent successfully!!")
            next()
        })
        .catch((err) => {
            console.error(err)
        })
})

const Contact = model("Contact", schema)

export default Contact
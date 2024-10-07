import { createTransport } from 'nodemailer'
// import { config } from "dotenv";
// config({
//     path: "./config/.env"
// })

// If we just assign "transporter" -->  "createTransport" the process.env.values won't be there since they haven't been parsed yet
// But making it a function will provide values to "process.env" since it will depend on where we call it
const transporter = () => {
    return createTransport({
        service: 'Gmail',
        auth: {
            user: `${process.env.EMAIL_USER}`,
            pass: `${process.env.EMAIL_PASS}`
        }
    })
}

export default transporter
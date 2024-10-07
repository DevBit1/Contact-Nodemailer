

const getMailTemplate = (name, email, phone, message, date) => {
    return (
        `<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Mail from server</title>
            </head>

            <body>
                <h2>Hello Admin,</h2>
                <p>A new contact form has been submitted with the following details:</p>
                <ul>
                    <li>Name : ${name}</li>
                    <li>Email : ${email}</li>
                    <li>Contact : ${phone}</li>
                    <li>Message : ${message}</li>
                </ul>

                <p>
                    <span>Submitted at : </span>
                    [${date}]
                </p>

                <p>Best regards,</p>
                <p>Contact form Application</p>
            </body>
        `
    )
}

export default getMailTemplate
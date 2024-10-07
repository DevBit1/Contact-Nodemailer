import Contact from "../models/contact.model.js"


const submitForm = async (req, res, next) => {
    try {
        const { name, email, phone = 0, message } = req.body

        const newContact = new Contact({
            name,
            email,
            phone,
            message
        })

        await newContact.save()

        res.status(201).json({
            success: true,
            message: "Contact submitted successfully!!"
        })
    } catch (error) {
        console.error("Encountered this : ", error)
        res.status(500).json(
            {
                success: false,
                message: error
            }
        )
    }
}

export default submitForm
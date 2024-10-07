import Contact from "../models/contact.model.js"


const getAllForms = async (req, res, next) => {
    try {

        const allForms = await Contact.find()

        res.json({
            success: true,
            message: "Fetched all",
            allForms
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

export default getAllForms
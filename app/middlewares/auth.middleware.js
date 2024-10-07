

const authenticate = (req, res, next) => {
    const key = req.headers['authorization']
    const secret_key = process.env.ADMIN_SECRET_KEY


    if (key != secret_key)
        return res.status(403).json({
            success: false,
            message: "Not authorized!"
        })

    return next()

}

export default authenticate
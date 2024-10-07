import { connect } from "mongoose"

const dbConnect = async () => {
    try {
        const data = await connect(`${process.env.MONGO_URI}`,{
            dbName:"ContactForm"
        })

        console.log(`Connected to ${data.connection.host}`)
    } catch (error) {
        console.error(error)
    }
}

export default dbConnect
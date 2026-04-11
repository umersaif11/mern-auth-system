import jwt from "jsonwebtoken"

const userAuth = async (req, res) => {
    const {token} = req.cookies

    if(!token) {
        return res.json({
            success: false,
            message: 'Not Authorized. Login Again.'
        })
    }

    try {
        
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}
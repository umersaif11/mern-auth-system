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
        
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return res.json({
            success: false,
            message: error.message
        })
    }
}
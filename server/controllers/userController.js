import userModel from "../models/userModel"

export const getUserData = (req, res) => {
    try {
        
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const register = (req, res) => {
    const {name, email, password} = req.body
    if(!name || !email ||!password) {
        return res.json({
            success: false,
            message: 'Missing Details'
        })
    }

    try {
        
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}
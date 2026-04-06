

export const register = (req, res) => {
    const {name, email, password} = req.body
    if(!name || !email ||!password) {
        return res.json({
            success: false,
            message: 'Missing Details'
        })
    }
}
import jwt from "jsonwebtoken"

// admin authentication middleware
const authAdmin = async (req, res, next) => {
    try {
        const { atoken } = req.headers
        if (!atoken) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }

        // fallbacks to match controller defaults
        const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "vemulaharshith1476@gmail.com";
        const JWT_SECRET = process.env.JWT_SECRET || "prescripto_jwt_secret";

        const token_decode = jwt.verify(atoken, JWT_SECRET)

        // token payload expected: { role: 'admin', email }
        if (!token_decode || token_decode.role !== 'admin' || token_decode.email !== ADMIN_EMAIL) {
            return res.json({ success: false, message: 'Not Authorized Login Again' })
        }

        next()
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

export default authAdmin;
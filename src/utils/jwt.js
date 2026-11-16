import jwt from "jsonwebtoken";

export function generateToken(user) {

    return jwt.sign(
        {
            sub: user.id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );
}
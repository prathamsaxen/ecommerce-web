import jwt from "jsonwebtoken";

const generateToken = (id) => {
    return jwt.sing({id}, process.env.JWT_SECRET);
}

export default generateToken;
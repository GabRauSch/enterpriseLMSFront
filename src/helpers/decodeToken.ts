import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

const secretKey = process.env.JWTSECRET

export const getUserIdFromToken = (token: any)=>{
    const decodedToken: any = jwt.decode(token);


    if (decodedToken) {
        const userId: string = decodedToken.id; 
        return userId;
    } else {
        return null
    }
}



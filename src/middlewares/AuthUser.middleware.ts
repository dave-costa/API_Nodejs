import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'
interface Ipayload {
    sub: string
}
export class AuthMiddle {
    handle(req: Request, res:Response, next: NextFunction) {
        //get token 
        const getToken = req.headers.authorization
        //validate token 
        if (!getToken) return res.status(401).end()        
        //verify token is valid
        const [, token] = getToken.split(' ')
        const secret = 'f9f7eef441a886f8560815ea91d34a9d'
        try {
            const { sub } = verify(token, secret ) as Ipayload
            //recover token
            req.user_id = sub
            return next()
        } catch (error) {
            return res.status(401).end()            
        }     
    }
}
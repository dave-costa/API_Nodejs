import { Request, Response } from 'express'
import { AuthUser } from '../services/AuthService'

export class AuthContoller {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body
        const auth = new AuthUser()
        const token = await auth.execute({email, password})
        res.json(token)
    }
}
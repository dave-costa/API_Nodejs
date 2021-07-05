import { getCustomRepository } from 'typeorm';
import { Request, Response, NextFunction } from 'express'
import { UsersRepositories } from '../../repositories/UserRepositories';

export class AdminMiddleware {
    async handle(req: Request, res: Response, next: NextFunction) {
        const { user_id } = req
        const userRepository = getCustomRepository(UsersRepositories)
        const { admin } = await userRepository.findOne( user_id )
        if (admin) return next()
        return res.status(401).end()
    }
}
import {Request, Response} from 'express'
import { CreateTag } from '../services/CreateTag'

export class CreateTagController {
    async handle(req: Request, res: Response) {
        const { name } = req.body
        const createTagService = new CreateTag()        
        const tag = await createTagService.execute({name})
        console.table(tag)
        res.json(tag)
    }
}
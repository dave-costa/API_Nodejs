import { Request, Response } from 'express';
import { ComplimentService } from '../services/CreateCompliments';

export class ComplimentController {
    async handle(req: Request,res: Response) {     
        const { tag_id, user_receiver, message } = req.body
        const { user_id } = req
        const createCompliment = new ComplimentService()
        const compliment = await createCompliment.execute(
            {
                tag_id, 
                user_sender:user_id, 
                user_receiver, 
                message
            }
        )
        return res.json(compliment)
    }
}
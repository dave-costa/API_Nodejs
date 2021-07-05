import { Request, Response, NextFunction } from 'express'
import 'express-async-errors'

export class DetectError {
    handle(err: Error ,req: Request, res: Response, next:NextFunction) {
        if (err instanceof Error) {
            console.log(`lamento deu erro: ${err} :(`);
            return res.status(400).json({error: err.message})
        }
        return res.status(500).json({
            status: "error",
            message: "internal server error :("
        })
    }
}
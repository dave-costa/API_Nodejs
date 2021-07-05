import {Request, Response } from "express";
import { CreateUser } from "../services/CreateUser";

export class CreateUserController {
    async handle(req: Request, res: Response) {   
        const { name, email, admin, password } = req.body
        const createUserService = new CreateUser()
        const user = await createUserService.execute({name, email,password, admin})
        return res.json(user) 
                 
    }
}
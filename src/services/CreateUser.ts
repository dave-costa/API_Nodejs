import { getCustomRepository } from 'typeorm'
import { UsersRepositories } from "../repositories/UserRepositories";
import { hash } from 'bcryptjs'
interface UserRequest {
    name: string,
    email: string,   
    admin?: boolean,
    password: string
}
export class CreateUser {
    async execute({ name, email, admin=false, password } : UserRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories)

        if (!email) {
            throw new Error("email inválido!");
            
        }

        const userExist = await usersRepositories.findOne({email})
        if (userExist) {
            throw new Error("Usuario já existe");
            
        }

        const passHash = await hash(password, 10)
        const user = usersRepositories.create({
            name, 
            email,
            admin,
            password: passHash
        })

        await usersRepositories.save(user)

        return user


    }
}
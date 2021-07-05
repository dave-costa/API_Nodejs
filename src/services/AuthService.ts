import { getCustomRepository } from 'typeorm'
import { compare } from 'bcryptjs'
import { UsersRepositories } from '../repositories/UserRepositories'
import { sign } from 'jsonwebtoken'

interface UauthRequest {
    email: string,
    password: string
}

export class AuthUser {
    async execute({email, password}: UauthRequest) {
        const userRepositories = getCustomRepository(UsersRepositories)
        //verify existing email
        const user = await userRepositories.findOne({email})
        if (!user) throw new Error("Email our password incorrect");          
        //verify password
        const passCorret = await compare(password, user.password)
        if (!passCorret) throw new Error("Email our password incorrect");
        //se tudo der bom a gente precisa gerar um token
        const token = sign({
            email: user.email
        }, 'f9f7eef441a886f8560815ea91d34a9d', {
            subject: user.id,
            expiresIn: "1d"
        })
        return token
    }
}
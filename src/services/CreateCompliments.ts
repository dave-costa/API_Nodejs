import { getCustomRepository } from 'typeorm';
import { UsersRepositories } from '../repositories/UserRepositories';
import { ComplimentsRepository } from './../repositories/ComplimentsRepositories';

interface ComplimentRequest {
    tag_id: string,
    user_sender: string,
    user_receiver: string
    message: string
    
}

export class ComplimentService {
    async execute ({tag_id, user_sender, user_receiver, message} :ComplimentRequest) {
        const complimentsRepo = getCustomRepository(ComplimentsRepository)
        // a gente também vai precisar do repositorio dos usuarios 
        const userRepo = getCustomRepository(UsersRepositories)

        if (user_sender === user_receiver) {
            throw new Error("hehe slc quer mandar elogio pra vc mesmo");
                        
        }
        const userReceiverExist = await userRepo.findOne(user_receiver)
        //quando passamos assim sem a sixtaxe de objetos ele vai localizar pelo id

        if (!userReceiverExist) {
            throw new Error("Usuario invalido");
            
        }

        const compliment = complimentsRepo.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepo.save(compliment)
        return compliment
    }
}
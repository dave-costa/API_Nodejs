import {getCustomRepository} from 'typeorm'
import { TagsRepository } from '../repositories/TagsRepositories'

interface TagsRequest {
    name: string,
}

export class CreateTag {
    async execute({name}: TagsRequest) {
        const tagsRepositories = getCustomRepository(TagsRepository)
       
        if (!name) {
            throw new Error("Nome inválido")
        }
        const tagExist =await tagsRepositories.findOne({name})
        if (tagExist) {
            throw new Error("Tag já existe");
            
        }
        const tag = tagsRepositories.create({
            name
        })
        await tagsRepositories.save(tag)
        return tag
        
    }
}
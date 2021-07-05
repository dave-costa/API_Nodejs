import { EntityRepository, Repository } from "typeorm";
import { Tags } from "../entities/Tags";

@EntityRepository(Tags)
export class TagsRepository extends Repository<Tags> {}
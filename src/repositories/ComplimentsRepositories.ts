import { Repository, EntityRepository } from 'typeorm'
import { Compliments } from './../entities/Compliments';

@EntityRepository(Compliments)
export class ComplimentsRepository extends Repository <Compliments> {}
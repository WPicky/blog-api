import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from  './entity/comment.entity';
import { CommentDto } from './dto/comment.dto';


@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<CommentDto>,
    ) {}

    async findAll(): Promise<CommentDto[]> {
        return await this.commentRepository.find();
    }

    async findById(id: number): Promise<CommentDto> {
        try {
            return await this.commentRepository.findOne(id);
        } catch (err) {
            return err;
        }
    }

    async findByUserId(authorIdRequested: number): Promise<CommentDto[]> {
        try {
            return await this.commentRepository.find({ where: { authorId: authorIdRequested } });
        } catch (err) {
            return err;
        }
    }

    async findByArticleId(articleIdRequested: number): Promise<CommentDto[]> {
        try {
            return await this.commentRepository.find({ where: { articleId: articleIdRequested } });
        } catch (err) {
            return err;
        }
    }

    async insert(comm: CommentDto): Promise< CommentDto> {
        const newComm = new  CommentDto();

        Object.keys(comm).forEach((key) => {
            newComm[key] = comm[key];
        });

        try {
            return await this.commentRepository.save(newComm);
        } catch (err) {
            return err;
        }
    }

    async update(oldComm:  CommentDto, updated_values: CommentDto): Promise< CommentDto> {
        const updatedComm = oldComm;

        Object.keys(updated_values).forEach((key) => {
            updatedComm[key] = updated_values[key];
        });

        try {
            return await this.commentRepository.save(updatedComm);
        } catch (err) {
            return err;
        }

    }

    async delete(id: string) {
        try {
            return await this.commentRepository.delete(id);
        } catch (err) {
            return err;
        }
    }


}

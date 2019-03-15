import { Controller, Get, Body, Param, Post, Put, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from './entity/comment.entity';

// DTO
import { CommentDto } from './dto/comment.dto';


@Controller('commentaire')
export class CommentController {
    constructor(private readonly commentaireService: CommentService) {}

    @Get()
    findAll(): Promise<Comment[]> {
        return this.commentaireService.findAll();
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<CommentDto> {
        return await this.commentaireService.findById(params.id);
    }

    @Get('user/:id')
    async findByUserId(@Param() params): Promise<CommentDto[]> {
        return await this.commentaireService.findByUserId(params.id);
    }

    @Get('article/:id')
    async findByArticleId(@Param() params): Promise<CommentDto[]> {
        return await this.commentaireService.findByArticleId(params.id);
    }

    @Post()
    async create(@Body() commentaire: CommentDto): Promise<CommentDto> {
        return await this.commentaireService.insert(commentaire) as CommentDto;
    }

    @Put(':id')
    async update(@Body() updatedCommentaire: CommentDto, @Param() params): Promise<CommentDto> {
        const oldComm = await this.commentaireService.findById(params.id);
        return await this.commentaireService.update(oldComm, updatedCommentaire);
    }

    @Delete(':id')
    async delete(@Param() params) {
        return await this.commentaireService.delete(params.id);
    }

}

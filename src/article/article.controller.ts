import { Controller, Get, Body, Param, Post, Put, Delete } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './entity/article.entity';

// DTO
import { ArticleDto } from './dto/article.dto';


@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Get()
    findAll(): Promise<Article[]> {
        return this.articleService.findAll();
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<ArticleDto> {
        return await this.articleService.findById(params.id);
    }

    @Get('user/:user_id')
    async findByUserId(@Param() params): Promise<ArticleDto[]> {
        return await this.articleService.findByUserId(params.user_id);
    }

    @Post()
    async create(@Body() article: ArticleDto): Promise<ArticleDto> {
        return await this.articleService.insert(article) as ArticleDto;
    }

    @Put(':id')
    async update(@Body() updatedArticle: ArticleDto, @Param() params): Promise<ArticleDto> {
        const oldArticle = await this.articleService.findById(params.id);
        return await this.articleService.update(oldArticle, updatedArticle);
    }

    @Delete(':id')
    async delete(@Param() params) {
        return await this.articleService.delete(params.id);
    }

}

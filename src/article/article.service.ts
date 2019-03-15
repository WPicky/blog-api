import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './entity/article.entity';
import { ArticleDto } from './dto/article.dto';


@Injectable()
export class ArticleService {
    constructor(
        @InjectRepository(Article)
        private readonly articleRepository: Repository<Article>,
    ) {}

    async findAll(): Promise<Article[]> {
        return await this.articleRepository.find();
    }

    async findById(id: string): Promise<Article> {
        try {
            return await this.articleRepository.findOne(id);
        } catch (err) {
            return err;
        }
    }

    async findByUserId(userId: string): Promise<Article[]> {
        try {
            return await this.articleRepository.find({ where: { authorId: userId } });
        } catch (err) {
            return err;
        }
    }

    async insert(article: ArticleDto): Promise< Article> {
        const newArticle = new  Article();

        Object.keys(article).forEach((key) => {
            newArticle[key] = article[key];
        });

        try {
            return await this.articleRepository.save(newArticle);
        } catch (err) {
            return err;
        }
    }

    async update(oldArticle:  Article, updated_values: ArticleDto): Promise< Article> {
        const updatedArticle = oldArticle;

        Object.keys(updated_values).forEach((key) => {
            updatedArticle[key] = updated_values[key];
        });

        try {
            return await this.articleRepository.save(updatedArticle);
        } catch (err) {
            return err;
        }

    }

    async delete(id: string) {
        try {
            return await this.articleRepository.delete(id);
        } catch (err) {
            return err;
        }
    }


}

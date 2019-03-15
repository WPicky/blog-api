import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entity/user.entity';
import { Article } from './entity/article.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Article, User])],
    controllers: [ArticleController],
    providers: [ArticleService],
})
export class ArticleModule {}

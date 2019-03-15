import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entity/user.entity';
import { Article } from '../article/entity/article.entity';
import { Note } from './entity/note.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Note, Article, User])],
    controllers: [NoteController],
    providers: [NoteService],
})
export class NoteModule {}

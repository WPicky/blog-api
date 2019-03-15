import { Module } from '@nestjs/common';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entity/user.entity';
import { Comment } from './entity/comment.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Comment, User])],
    controllers: [CommentController],
    providers: [CommentService],
})
export class CommentaireModule {}

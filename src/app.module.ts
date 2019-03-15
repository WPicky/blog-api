import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ArticleModule } from './article/article.module';
import { NoteModule } from './note/note.module';
import { CommentModule } from './comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UsersModule,
    ArticleModule,
    NoteModule,
    CommentModule,
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: '127.0.0.1',
    port: 8889,
    username: 'root',
    password: 'root',
    database: 'blog-nestjs',
    entities: [__dirname + '/entity/**.entity.ts'],
    synchronize: true,
}),
  ],
})
export class AppModule {constructor(private readonly connection: Connection) {}
}

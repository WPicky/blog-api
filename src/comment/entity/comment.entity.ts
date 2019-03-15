import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entity/user.entity';
import { Article } from '../../article/entity/article.entity';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @JoinColumn({ name: 'author_id' })
    @ManyToOne(type => User, author => author.id)
    authorId: number;

    @JoinColumn({ name: 'article_id' })
    @ManyToOne(type => Article, article => article.id)
    articleId: number;

    @Column( "text")
    content: string

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

}

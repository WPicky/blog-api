import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Article } from '../../article/entity/article.entity';
import { User} from '../../users/entity/user.entity';

@Entity()
export class Note {

    @PrimaryGeneratedColumn()
    id: number;

    @JoinColumn({ name: 'author_id' })
    @ManyToOne(type => User, author => author.id)
    authorId: number;

    @JoinColumn({ name: 'article_id' })
    @ManyToOne(type => Article, article => article.id)
    articleId: number;

    @Column()
    note: number

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

}

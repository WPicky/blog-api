import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entity/user.entity';

@Entity()
export class ArticleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 255 })
    title: string;

    @JoinColumn({ name: 'author_id' })
    @ManyToOne(type => User, author => author.id)
    authorId: number;

    @Column( "text")
    content: string

    @Column({length: 40})
    likes: Number;

    @Column({length: 40})
    disLikes: Number;

//(picture: Buffer | File;)

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;

}

import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Unique,
    UpdateDateColumn,
} from 'typeorm';
import {
    getCopyConstructions,
    getOrDefault,
} from '../../utils/copy-constructor.tools';
import { UserCategory } from '../enums/user-category.enum';

@Entity()
@Unique(['email'])
export class User {
    @Column({ type: 'bytea', name: 'avatar', nullable: true })
    avatar: ArrayBuffer;

    @Column({
        type: 'enum',
        name: 'category',
        enum: Object.keys(UserCategory).map(item => UserCategory[item]),
        default: 'Standard',
    })
    category: UserCategory;

    @OneToMany(type => Comment, comment => comment.author)
    comments: Comment[];

    @CreateDateColumn()
    createdAt: Date;

    @Column({ type: 'varchar', name: 'email', length: 200 })
    email: string;

    @Column({ type: 'varchar', name: 'first_name', length: 100 })
    firstname: string;

    @PrimaryGeneratedColumn('uuid', { name: 'id' })
    id: string;

    @Column({ type: 'boolean', name: 'is_author', default: false })
    isAuthor: boolean;

    @Column({ type: 'varchar', name: 'last_name', length: 100 })
    lastname: string;

    @Column({ type: 'varchar', name: 'mobile_phone', length: 31 })
    mobilePhone: string;

    @Column({ type: 'varchar', name: 'password' })
    password: string;

    @UpdateDateColumn()
    updatedAt: Date;

    constructor(copy: Partial<User> = {}) {
        this.email = getOrDefault(copy.email, '');
        this.password = getOrDefault(copy.password, '');
        this.lastname = getOrDefault(copy.lastname, '');
        this.firstname = getOrDefault(copy.firstname, '');
        this.mobilePhone = getOrDefault(copy.mobilePhone, '');
        this.avatar = getOrDefault(copy.avatar, undefined) as any;
        this.category = getOrDefault(copy.category, undefined) as any;
       //  this.comments = getCopyConstructions(Comment, copy.comments) as any;
        this.id = getOrDefault(copy.id, undefined);
    }
}

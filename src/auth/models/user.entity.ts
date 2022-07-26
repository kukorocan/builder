import {Column,
    Entity,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,} from 'typeorm';
import { FeedPostEntity } from 'src/feed/models/post.entity';
import {Role} from './role.enum';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column({ unique: true })
    email: string;

    @Column({select: false })
    password: string;

    @Column({type: 'enum', enum: Role, default: Role.USER})
    role: Role;
    
    @OneToMany(() => FeedPostEntity, (feedPostEntity) => feedPostEntity.author)
    feedPosts: FeedPostEntity[];

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date;
}
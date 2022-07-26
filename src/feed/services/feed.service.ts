import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { FeedPost } from '../models/post.interface';
import { User } from '../../auth/models/user.class'

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>
    ){}

    createPost(user: User, feedPost: FeedPost): Observable<FeedPost>{
        feedPost.author = user;
        return from( this.feedPostRepository.save(feedPost));
    }

    findAllPosts(): Observable<FeedPost[]>{
        return from(this.feedPostRepository.find())
    }
    updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult>{
        return from(this.feedPostRepository.update(id, feedPost))
    }
    deletePost(id:number): Observable<DeleteResult>{
        return from(this.feedPostRepository.delete(id))
    }
}

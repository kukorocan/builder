import { Body, Controller, Post,Get, Param,Put, Delete } from '@nestjs/common';
import {Observable} from 'rxjs'
import { FeedPost } from '../models/post.interface';
import {UpdateResult, DeleteResult} from 'typeorm'
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
    constructor(private feedService: FeedService){

    }
    @Post()
    create(@Body() feedPost: FeedPost):Observable<FeedPost>{
        return this.feedService.createPost(feedPost)
    } 

    @Get()
    findAll():Observable<FeedPost[]> {
        return this.feedService.findAllPosts()
    }

    @Put(':id')
    update(
        @Param('id') id: number, 
        @Body() feedPost:FeedPost,
    ):Observable<UpdateResult> {
        return this.feedService.updatePost(id, feedPost)
    }

    @Delete(':id')
    delete(@Param('id') id: number): Observable<DeleteResult>{
        return this.feedService.deletePost(id)
    }
}
import { Body, Controller, Post, Request, Get, Param,Put, Delete, UseGuards } from '@nestjs/common';
import {Observable} from 'rxjs'
import { FeedPost } from '../models/post.interface';
import {UpdateResult, DeleteResult} from 'typeorm'
import { FeedService } from '../services/feed.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from 'src/auth/models/role.enum';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('feed')
export class FeedController {
    constructor(private feedService: FeedService){

    }
    // need to add another Roles for post
    @Roles(Role.ADMIN, Role.USER)
    @UseGuards(JwtGuard, RolesGuard)
    @Post()
    create(@Body() feedPost: FeedPost, @Request() req):Observable<FeedPost>{
        return this.feedService.createPost(req.user, feedPost)
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

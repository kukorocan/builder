import { IsEmail, IsString } from 'class-validator';
import {Role} from './role.enum'
import {FeedPost} from 'src/feed/models/post.interface'

export class User {
    id?: number;
    firstName?: string;
    lastName?: string;
    @IsEmail()
    email?: string;
    @IsString()
    password?: string;
    imagePath?: string;
    role?: Role;
    posts?: FeedPost[];
  }
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UserEntity } from '../models/user.entity';
import { User} from '../models/user.interface'
import {Repository} from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private jwtService: JwtService) {
        
    }
    // Observable<String> 34.18 : Observable<string>
    hashPassword(password: string){
        return from(bcrypt.hash(password, 12));
    }

    registerAccount(user: User): Observable<User> {
        const {firstName, lastName, email, password} = user;

        return this.hashPassword(password).pipe(
            switchMap((hashedPassword: string) => {
                return from (this.userRepository.save({
                    firstName,
                    lastName,
                    email,
                    password: hashedPassword,
                }),).pipe(
                    map((user: User) => {
                        delete user.password;
                        return user;
                    }),
                );
            }),
        );
    }

    // {email}, 
    // validate user
    validateUser(email: string, password:string ): Observable<User>{
        return from(this.userRepository.findOneBy({email})).pipe
        (
            switchMap((user: User) =>
                from(bcrypt.compare(password, user.password)).pipe(
                    map((isVallidPassword: boolean) => {
                        if (isVallidPassword) {
                            delete user.password;
                            return user;
                        }
                    })
                )
            )
        )
    }
    // Login user, get token Observable<string>
    login(user: User): Observable<string> {
        const {email, password} = user;
        return this.validateUser (email, password).pipe(
            switchMap((user: User) => {
                if (user) {
                    // create jwt
                    return from(this.jwtService.signAsync({user}))
                }
            })
        )
    }
}


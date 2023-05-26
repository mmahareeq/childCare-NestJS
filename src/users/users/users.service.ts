import { HttpException, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/user.dto';
import {  genSalt, hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable, catchError } from 'rxjs';


@Injectable()
export class UsersService {
    constructor( @InjectRepository(User)
    private usersRepository: Repository<User>){

    }

    async create(createUserDto: CreateUserDto): Promise<any>{
        const {password} = createUserDto;
        const salt = process.env.Salt;
        const hashPassword = await hash(password, salt);

        const newUserDto = {...createUserDto, password: hashPassword};
        const user = await this.usersRepository.save(this.usersRepository.create(newUserDto));
        if(!user){
            throw new HttpException(
                {
                  success: false,
                  message: `OCURRS_ ERROR`,
                },
                404,
              );
        }

        return user;
    }

    async findUserByEmail(email: string){

      try {
          const user = this.usersRepository.findOne({
            where: {
              email: email,
            }
          });
        return user;  
      } catch (error) {
        
        throw new HttpException(
          {
            success: false,
            message: `OCURRS_ ERROR`,
          },
          404,
        );
  }
      }
     
      
    }

  

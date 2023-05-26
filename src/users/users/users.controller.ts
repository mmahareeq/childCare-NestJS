import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';

import { CreateUserDto } from './dto/user.dto';
@Controller('users')
export class UsersController {

    constructor(private readonly _userService: UsersService){}

    @Post()
    async create(@Body() createUserDto: CreateUserDto){
        return await this._userService.create(createUserDto);
    }

    @Post()
    async findUser(@Body('email') email: string){
        
        return await this._userService.findUserByEmail(email);
    }
}

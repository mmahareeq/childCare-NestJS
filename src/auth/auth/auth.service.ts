import { Injectable,  UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users/users.service';

import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor( private readonly _userService: UsersService,
        private readonly jwtService : JwtService){}

    async login(email: string, pass: string){
        const user = await this._userService.findUserByEmail(email);
        if (user?.password !==  pass) {
            throw new UnauthorizedException();
        }
         
        const { password, ...result } = user;
        const payload = {
            _id: user.id.toString(),
            email: user.email,
            user_type: user.user_type,
        }
        //this._configService.get<string>('jwtSecret'),
        const jwtSignOptions = {
            secret: 'jwtSecret'
          };
        const  access_token=  await this.jwtService.signAsync(payload, jwtSignOptions);
        return {sucess: true, access_token : access_token};
    }
}

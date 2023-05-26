import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    
    constructor(private readonly _authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    login(@Body('email') email: string, @Body('password') password: string){
        
         return this._authService.login(email, password);
    }

}

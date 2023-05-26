import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersModule } from 'src/users/users/users.module';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports: [UsersModule,  JwtModule.register({
    signOptions: { expiresIn: '24h' },
  }),],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}

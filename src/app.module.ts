import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeormService } from './config/typeorm/typeorm.service';
import { AuthModule } from './auth/auth.module';
import { CaregiverModule } from './caregiver/caregiver.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({useClass: TypeormService}),
    AuthModule,
    CaregiverModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

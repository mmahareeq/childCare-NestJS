import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';


@Injectable()
export class TypeormService implements TypeOrmOptionsFactory {

    constructor(@Inject(ConfigService)
    private readonly config: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: this.config.get<string>('DATABASE_HOST') || 'localhost',
            port: this.config.get<number>('DATABASE_PORT') || 27017,
            database: this.config.get<string>('DATABASE_NAME') || 'child-care',
            username: this.config.get<string>('DATABASE_USER') || '',
            password: this.config.get<string>('DATABASE_PASSWORD') || '',
            entities: ['dist/**/*.entity.{ts,js}'],
            migrationsTableName: 'typeorm_migrations',
            logger: 'file',
            synchronize: true, // never use TRUE in production!
          };
    }

}

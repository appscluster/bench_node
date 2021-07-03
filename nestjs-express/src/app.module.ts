import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'bcv8TBzS3vqbGciO2J73gwLYaoYbGciO2J73gwLopaopa4eCAue3vqonAue3vqo',
      database: 'benchdb',
      entities: [Users],
      synchronize: false,
    }),
    UsersModule
  ],
})
export class AppModule {}
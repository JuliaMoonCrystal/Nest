
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './repository/users.repository';
import { UserService } from './service/users.service';
import { UsersController } from './controller/users.controller';
import { User } from './entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository])],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
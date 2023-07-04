import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../service/users.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ReturnUserDto } from '../dtos/return-user.dto';
import { UserRole } from '../roles/roles';
import { User } from '../entity/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UserService) { }

  @Post("/register")
  async createAdminUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto> {
    //const user = await this.usersService.createAdminUser(createUserDto);

    const user = new User
    return {
      user,
      message: 'Administrador cadastrado com sucesso',
    };
  }
}
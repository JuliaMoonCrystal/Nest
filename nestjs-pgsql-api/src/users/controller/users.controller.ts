import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../service/users.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { ReturnUserDto } from '../dtos/return-user.dto';
import { UserRole } from '../roles/roles';

@Controller('users')
export class UsersController {
  constructor(private usersService: UserService) {}

  @Post()
  async createAdminUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<ReturnUserDto> {
    const role: UserRole = UserRole.ADMIN; // Defina o valor correto para o papel de administrador
  
    const user = await this.usersService.createAdminUser(createUserDto, role);
    return {
      user,
      message: 'Administrador cadastrado com sucesso',
    };
  }
}
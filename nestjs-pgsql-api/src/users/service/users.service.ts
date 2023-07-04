import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserRole } from '../roles/roles';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/users.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { isUserEligible } from 'src/custom.node';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) { }

  async createAdminUser(createUserDto: CreateUserDto): Promise<User> {
    if (createUserDto.password != createUserDto.passwordConfirmation) {
      throw new UnprocessableEntityException('As senhas não conferem');
    } else {
      return this.userRepository.createUser(createUserDto, UserRole.ADMIN);
    }
  }

  async createUser(user: User): Promise<User> {
    if (!isUserEligible(user)) {
      throw new Error('O usuário não é elegível para se cadastrar.');
    }
    return user;
  }
}
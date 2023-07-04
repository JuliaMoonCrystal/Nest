import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserRole } from '../roles/roles';
import { User } from '../entity/user.entity';
import { UserRepository } from '../repository/users.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createAdminUser(createUserDto: CreateUserDto, role: UserRole): Promise<User> {
    const { email, name, password } = createUserDto;

    const user = this.userRepository.create();
    user.email = email;
    user.name = name;
    user.role = role;
    user.status = true;
    // ... rest of the code

    try {
      await this.userRepository.save(user);
      delete user.password;
      delete user.salt;
      return user;
    } catch (error) {
      // ... error handling
    }
  }

  // ... other methods
}
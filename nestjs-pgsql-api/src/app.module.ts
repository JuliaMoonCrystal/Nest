import { Module } from '@nestjs/common';
import { typeOrmConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { SupplierModule } from './supplier/supplier.module';
import { UserRepository } from './users/repository/users.repository';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UsersModule, SupplierModule],
  controllers: [],
  providers: [],
})
export class AppModule { }

import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';

config();
console.log(process.env.DB_USER);

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.HOST,
  port: parseInt(process.env.PORT,10),
  username: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

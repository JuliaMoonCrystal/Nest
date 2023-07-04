import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import PaymentStrategy from '../entities/paymentStrategy';

@Injectable()
export class PaymentStrategyService {
//   constructor(
//     @InjectRepository(PaymentStrategy)
//     private paymentStrategyRepository: Repository<PaymentStrategy>,
//   ) {}

//   async create(paymentStrategyData: Partial<PaymentStrategy>): Promise<PaymentStrategy> {
//     const paymentStrategy = this.paymentStrategyRepository.create(paymentStrategyData);
//     return await this.paymentStrategyRepository.save(paymentStrategy);
//   }

//   async findAll(): Promise<PaymentStrategy[]> {
//     return await this.paymentStrategyRepository.find();
//   }

//   async findOne(id: number): Promise<PaymentStrategy> {
//     return await this.paymentStrategyRepository.findOne(id);
//   }

//   async update(id: number, paymentStrategyData: Partial<PaymentStrategy>): Promise<PaymentStrategy> {
//     await this.paymentStrategyRepository.update(id, paymentStrategyData);
//     return await this.paymentStrategyRepository.findOne(id);
//   }

//   async remove(id: number): Promise<void> {
//     await this.paymentStrategyRepository.delete(id);
//   }
}
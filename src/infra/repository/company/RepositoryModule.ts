import { Module } from '@nestjs/common';
import Prisma from './Prisma';
import CompanyRepository from './CompanyRepository';

@Module({
  providers: [Prisma, CompanyRepository],
  exports: [CompanyRepository],
})
class RespositoryModule {}

export default RespositoryModule;

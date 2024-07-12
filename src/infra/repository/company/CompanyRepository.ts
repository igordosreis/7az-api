import ICompanyRepository from '@domain/repository/company/ICompanyRepository';
import IAccessAuth from '@domain/repository/company/output/IAccessAuth';
import { Injectable, NotFoundException } from '@nestjs/common';
import Prisma from './Prisma';
import AccessAuthDBO from './dbo/AccessAuthDbo';

@Injectable()
export default class CompanyRepository implements ICompanyRepository {
  constructor(
    private readonly _prisma: Prisma,
  ) {}
  
  public async findCompanyById(companyId: number): Promise<IAccessAuth> {
    const company = await this._prisma.company.findUnique({
      where: { id: companyId },
    });

    const isAccessAuthNotFound = !company;
    if (isAccessAuthNotFound) throw new NotFoundException('Company not found.');

    const accessAuth = new AccessAuthDBO(company);

    return accessAuth;
  }
}
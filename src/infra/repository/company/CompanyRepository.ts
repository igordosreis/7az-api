import ICompanyRepository from '@domain/repository/company/ICompanyRepository';
import IAccessAuth from '@domain/repository/company/output/IAccessAuth';
import Prisma from './Prisma';
import AccessAuthDBO from './dbo/AccessAuthDbo';

export default class CompanyRepository implements ICompanyRepository {
  constructor(
    private readonly _prisma: Prisma,
  ) {}
  
  public async findCompanyById(companyId: number): Promise<IAccessAuth | null> {
    const company = await this._prisma.company.findUnique({
      where: { id: companyId },
    });

    if (!company) return null;

    const accessAuth = new AccessAuthDBO(company);

    return accessAuth;
  }
}
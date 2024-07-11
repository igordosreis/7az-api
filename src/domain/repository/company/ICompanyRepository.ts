import IAccessAuth from './output/IAccessAuth';

export default interface ICompanyRepository {
  findCompanyById(companyId: number): Promise<IAccessAuth | null>
}
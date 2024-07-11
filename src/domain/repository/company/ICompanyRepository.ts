import ICompany from './output/ICompany';

export default interface ICompanyRepository {
  findCompanyById(companyId: string): Promise<ICompany | null>
}
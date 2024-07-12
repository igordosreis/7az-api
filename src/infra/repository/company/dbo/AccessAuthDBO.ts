import ICompany from '@domain/repository/company/output/ICompany';

export default class AccessAuthDBO {
  companyId: number;
  token: string;

  constructor(data: ICompany) {
    this.companyId = data.id;
    this.token = data.token;
  }
}
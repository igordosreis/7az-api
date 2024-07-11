import IInvoiceUseCase from '@domain/case/invoice/IInvoiceUseCase';
import IPlanIdRequest from '@domain/integration/invoice/input/IPlanIdRequest';
import IInvoice from '@domain/integration/invoice/output/IInvoice';
import ICompanyRepository from '@domain/repository/company/ICompanyRepository';

export default class InvoiceUseCase implements IInvoiceUseCase {
  constructor(
    private readonly _companyRepository: ICompanyRepository, 
  ) {}

  public async findAll(input: IPlanIdRequest): Promise<IInvoice[]> {
    const {
      user: {
        companyId,
      },
    } = input;
    // accessAuth do repo
    const accessAuth = await this._companyRepository.findCompanyById(companyId);
    console.log(accessAuth);
    // resultados do fetch do integration

    return [];
  }
}
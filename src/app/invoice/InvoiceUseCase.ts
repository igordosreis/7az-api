import IInvoiceUseCase from '@domain/case/invoice/IInvoiceUseCase';
import IInvoiceIntegration from '@domain/integration/invoice/IInvoiceIntegration';
import IPlanIdRequest from '@domain/integration/invoice/input/IPlanIdRequest';
import IInvoice from '@domain/integration/invoice/output/IInvoice';
import ICompanyRepository from '@domain/repository/company/ICompanyRepository';

export default class InvoiceUseCase implements IInvoiceUseCase {
  constructor(
    private readonly _companyRepository: ICompanyRepository, 
    private readonly _invoiceIntegration: IInvoiceIntegration,
  ) {}

  public async findAll(input: IPlanIdRequest): Promise<IInvoice[]> {
    const {
      user: {
        companyId,
      },
    } = input;
    
    const accessAuth = await this._companyRepository.findCompanyById(companyId);
    const isAccessAuthNotFound = !accessAuth;
    if (isAccessAuthNotFound) throw new Error('Company not found.');

    const invoices = await this._invoiceIntegration.findAll(accessAuth, input);

    return invoices;
  }
}
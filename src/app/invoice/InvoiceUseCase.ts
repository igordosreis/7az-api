import IInvoiceUseCase from '@domain/case/invoice/IInvoiceUseCase';
import IInvoiceIntegration from '@domain/integration/invoice/IInvoiceIntegration';
import IPlanIdAndIdRequest from '@domain/integration/invoice/input/IPlanAndIdRequest';
import IPlanIdRequest from '@domain/integration/invoice/input/IPlanIdRequest';
import IInvoice from '@domain/integration/invoice/output/IInvoice';
import IInvoiceDetail from '@domain/integration/invoice/output/IInvoiceDetail';
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
      planId,
    } = input;
    
    const accessAuth = await this._companyRepository.findCompanyById(companyId);

    const invoices = (await this._invoiceIntegration.findAll(accessAuth, input))
      .filter((invoice) => invoice.planId === planId);

    return invoices;
  }
  
  public async findOne(input: IPlanIdAndIdRequest): Promise<IInvoiceDetail> {
    const {
      user: {
        companyId,
      },
    } = input;

    const accessAuth = await this._companyRepository.findCompanyById(companyId);

    const invoice = this._invoiceIntegration.findOne(accessAuth, input);

    return invoice;
  }
}
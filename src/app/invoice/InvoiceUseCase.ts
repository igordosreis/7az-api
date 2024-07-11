import IInvoiceUseCase from '@domain/case/invoice/IInvoiceUseCase';
import IPlanIdAndIdRequest from '@domain/integration/invoice/input/IPlanAndIdRequest';
import IInvoice from '@domain/integration/invoice/output/IInvoice';

export default class InvoiceUseCase implements IInvoiceUseCase {
  public async findAll(_input: IPlanIdAndIdRequest): Promise<IInvoice[]> {
    // accessAuth do repo
    // resultados do fetch do integration

    return [];
  }
}
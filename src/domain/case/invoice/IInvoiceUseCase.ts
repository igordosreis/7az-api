import IPlanIdAndIdRequest from '@domain/integration/invoice/input/IPlanAndIdRequest';
import IInvoice from '@domain/integration/invoice/output/IInvoice';

export default interface IInvoiceUseCase {
  findAll(input: IPlanIdAndIdRequest): Promise<IInvoice[]>
}
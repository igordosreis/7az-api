import IPlanIdRequest from '@domain/integration/invoice/input/IPlanIdRequest';
import IInvoice from '@domain/integration/invoice/output/IInvoice';

export default interface IInvoiceUseCase {
  findAll(input: IPlanIdRequest): Promise<IInvoice[]>
}
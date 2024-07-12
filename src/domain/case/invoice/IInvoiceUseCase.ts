import IPlanIdAndIdRequest from '@domain/integration/invoice/input/IPlanAndIdRequest';
import IPlanIdRequest from '@domain/integration/invoice/input/IPlanIdRequest';
import IInvoice from '@domain/integration/invoice/output/IInvoice';
import IInvoiceDetail from '@domain/integration/invoice/output/IInvoiceDetail';

export default interface IInvoiceUseCase {
  findAll(input: IPlanIdRequest): Promise<IInvoice[]>
  findOne(input: IPlanIdAndIdRequest): Promise<IInvoiceDetail>
}
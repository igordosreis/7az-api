import IPlanIdAndIdRequest from '@domain/integration/invoice/input/IPlanAndIdRequest';

export default interface IInvoiceUseCase {
  findOne(input: IPlanIdAndIdRequest): Promise<void>
}
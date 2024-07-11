import IAccessAuth from '@domain/repository/company/output/IAccessAuth';
import IInvoice from './output/IInvoice';
import IPlanIdRequest from './input/IPlanIdRequest';
import IInvoiceDetail from './output/IInvoiceDetail';
import IPlanIdAndIdRequest from './input/IPlanAndIdRequest';

export default interface IInvoiceIntegration {
  findAll(accessAuth: IAccessAuth, input: IPlanIdRequest): Promise<IInvoice[]>
  findOne(accessAuth: IAccessAuth, input: IPlanIdAndIdRequest): Promise<IInvoiceDetail>
}
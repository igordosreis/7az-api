import IInvoiceIntegration from '@domain/integration/invoice/IInvoiceIntegration';
import IPlanIdAndIdRequest from '@domain/integration/invoice/input/IPlanAndIdRequest';
import IPlanIdRequest from '@domain/integration/invoice/input/IPlanIdRequest';
import IInvoice from '@domain/integration/invoice/output/IInvoice';
import IInvoiceDetail from '@domain/integration/invoice/output/IInvoiceDetail';
import IAccessAuth from '@domain/repository/company/output/IAccessAuth';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';
import IInvoiceExternal from './dto/input/IInvoiceExternal';
import InvoiceDTO from './dto/InvoiceDTO';

export default class InvoiceIntegration implements IInvoiceIntegration {
  private readonly BASE_URL = 'https://api.7az.com.br/v2/integrations/omnichannel';

  constructor(
    private readonly _httpService: HttpService,
  ) {}
  
  public async findAll(accessAuth: IAccessAuth, input: IPlanIdRequest): Promise<IInvoice[]> {
    const { token } = accessAuth;
    const { 
      user: {
        cpf,
      },
    } = input;

    const config: AxiosRequestConfig = {
      headers: {
        'x-api-key': token,
      },
      baseURL: this.BASE_URL,
    };
    const url = `/invoices?txId=${cpf}`;

    const {
      data: invoicesData,
    } = await this._httpService.axiosRef.get<IInvoiceExternal[]>(url, config);
    const invoices = invoicesData.map((invoice) => new InvoiceDTO(invoice));
    
    return invoices;
  }

  public findOne(_accessAuth: IAccessAuth, _input: IPlanIdAndIdRequest): Promise<IInvoiceDetail> {
    throw new Error('Method not implemented');
  }
}
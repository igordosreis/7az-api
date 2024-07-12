import IInvoiceIntegration from '@domain/integration/invoice/IInvoiceIntegration';
import IPlanIdAndIdRequest from '@domain/integration/invoice/input/IPlanAndIdRequest';
import IPlanIdRequest from '@domain/integration/invoice/input/IPlanIdRequest';
import IInvoiceDetail from '@domain/integration/invoice/output/IInvoiceDetail';
import IAccessAuth from '@domain/repository/company/output/IAccessAuth';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';
import { Injectable } from '@nestjs/common';
import IInvoiceExternal from './dto/input/IInvoiceExternal';
import InvoiceDTO from './dto/InvoiceDTO';
import IInvoicePaymentExternal from './dto/input/IInvoicePaymentExternal';

@Injectable()
export default class InvoiceIntegration implements IInvoiceIntegration {
  private readonly BASE_URL = process.env.BASE_API_URL;

  constructor(
    private readonly _httpService: HttpService,
  ) {}

  private async _fetchInvoices(token: string, cpf: string): Promise<IInvoiceExternal[]> {
    const config: AxiosRequestConfig = {
      headers: {
        'x-api-key': token,
      },
      baseURL: this.BASE_URL,
    };
    const url = `?txId=${cpf}`;

    const {
      data: invoicesData,
    } = await this._httpService.axiosRef.get<IInvoiceExternal[]>(url, config);

    return invoicesData;
  }
  
  public async findAll(accessAuth: IAccessAuth, input: IPlanIdRequest): Promise<IInvoiceDetail[]> {
    const { token } = accessAuth;
    const { 
      user: {
        cpf,
      },
    } = input;

    const invoices = (await this._fetchInvoices(token, cpf))
      .map((invoice) => new InvoiceDTO(invoice));
    
    return invoices;
  }

  public async findOne(
    accessAuth: IAccessAuth,
    input: IPlanIdAndIdRequest,
  ): Promise<IInvoiceDetail> {
    const { token } = accessAuth;
    const {
      user: {
        cpf,
      }, 
      id: invoiceId,
    } = input;

    const config: AxiosRequestConfig = {
      headers: {
        'x-api-key': token,
      },
      baseURL: this.BASE_URL,
    };
    const url = `/${invoiceId}/payment-data`;
    const {
      data: invoicePaymentData,
    } = await this._httpService.axiosRef.get<IInvoicePaymentExternal>(url, config);

    const invoiceData = (await this._fetchInvoices(token, cpf))
      .find(({ erpInvoiceId }) => erpInvoiceId === invoiceId);
    const isInvoiceNotFound = !invoiceData;
    if (isInvoiceNotFound) throw new Error('Invoice not found');

    const invoice = new InvoiceDTO(invoiceData, invoicePaymentData);

    return invoice;
  }
}
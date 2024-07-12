import InvoiceUseCase from '@app/invoice/InvoiceUseCase';
import IPlanIdAndIdRequest from '@domain/integration/invoice/input/IPlanAndIdRequest';
import IPlanIdRequest from '@domain/integration/invoice/input/IPlanIdRequest';
import IInvoice from '@domain/integration/invoice/output/IInvoice';
import IInvoiceDetail from '@domain/integration/invoice/output/IInvoiceDetail';
import ValidateAdmin from '@infra/integration/validateAdmin/ValidateAdmin';
import { Body, Controller, Get, Headers, Param } from '@nestjs/common';
import { IncomingHttpHeaders } from 'http';

@Controller()
export default class InvoiceController {
  constructor(
    private readonly _invoiceUseCase: InvoiceUseCase,
    private readonly _adminAuth: ValidateAdmin,
  ) {}

  @Get()
  async findAll(
    @Headers() headers: IncomingHttpHeaders,
      @Body() body: IPlanIdRequest,
  ): Promise<IInvoice[]> {
    await this._adminAuth.validate(headers);

    const invoices = await this._invoiceUseCase.findAll(body);

    return invoices;
  }

  @Get('/:id')
  async findOne(
    @Headers() headers: IncomingHttpHeaders,
      @Param('id') _id: string,
      @Body() body: IPlanIdAndIdRequest,
  ): Promise<IInvoiceDetail> {
    await this._adminAuth.validate(headers);

    const invoice = this._invoiceUseCase.findOne(body);

    return invoice;
  }
}
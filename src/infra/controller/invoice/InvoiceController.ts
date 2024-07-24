import InvoiceUseCase from '@app/invoice/InvoiceUseCase';
import IInvoice from '@domain/integration/invoice/output/IInvoice';
import IInvoiceDetail from '@domain/integration/invoice/output/IInvoiceDetail';
import ValidateAdmin from '@infra/integration/validateAdmin/ValidateAdmin';
import { Body, Controller, Post, Headers, Param } from '@nestjs/common';
import { IncomingHttpHeaders } from 'http';
import { IPlanIdRequestDTO } from './dto/IPlanIdRequestDTO';
import { IPlanIdAndIdRequestDTO } from './dto/IPlanIdAndIdRequest';

@Controller()
export default class InvoiceController {
  constructor(
    private readonly _invoiceUseCase: InvoiceUseCase,
    private readonly _adminAuth: ValidateAdmin,
  ) {}

  @Post()
  async findAll(
    @Headers() headers: IncomingHttpHeaders,
      @Body() body: IPlanIdRequestDTO,
  ): Promise<IInvoice[]> {
    await this._adminAuth.validate(headers);

    const invoices = await this._invoiceUseCase.findAll(body);

    return invoices;
  }

  @Post('/:id')
  async findOne(
    @Headers() headers: IncomingHttpHeaders,
      @Param('id') _id: string,
      @Body() body: IPlanIdAndIdRequestDTO,
  ): Promise<IInvoiceDetail> {
    await this._adminAuth.validate(headers);

    const invoice = this._invoiceUseCase.findOne(body);

    return invoice;
  }
}
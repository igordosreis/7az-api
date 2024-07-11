import InvoiceUseCase from '@app/invoice/InvoiceUseCase';
import IPlanIdAndIdRequest from '@domain/integration/invoice/input/IPlanAndIdRequest';
import IInvoice from '@domain/integration/invoice/output/IInvoice';
import ValidateAdmin from '@infra/integration/validateAdmin/ValidateAdmin';
import { Body, Controller, Get, Headers } from '@nestjs/common';
import { IncomingHttpHeaders } from 'http';

@Controller()
export default class InvoiceController {
  constructor(
    private readonly _adminAuth: ValidateAdmin,
    private readonly _invoiceUseCase: InvoiceUseCase,
  ) {}

  @Get()
  async findAll(
    @Headers() headers: IncomingHttpHeaders,
      @Body() body: IPlanIdAndIdRequest,
  ): Promise<IInvoice[]> {
    await this._adminAuth.validate(headers);

    const invoices = await this._invoiceUseCase.findAll(body);

    return invoices;
  }
}
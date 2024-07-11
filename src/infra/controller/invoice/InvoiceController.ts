import IPlanIdAndIdRequest from '@domain/integration/invoice/input/IPlanAndIdRequest';
import IInvoice from '@domain/integration/invoice/output/IInvoice';
import ValidateAdmin from '@infra/integration/validateAdmin/ValidateAdmin';
import { Body, Controller, Get, Headers } from '@nestjs/common';
import { IncomingHttpHeaders } from 'http';

@Controller()
export default class InvoiceController {
  constructor(
    private readonly _adminAuth: ValidateAdmin,
  ) {}

  @Get()
  async findAll(
    @Headers() headers: IncomingHttpHeaders,
      @Body() _body: IPlanIdAndIdRequest,
  ): Promise<IInvoice[]> {
    await this._adminAuth.validate(headers);

    return [];
  }
}
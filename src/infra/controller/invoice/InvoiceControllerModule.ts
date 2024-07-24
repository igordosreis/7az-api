import InvoiceUseCaseProxyModule from '@infra/usecaseproxy/invoice/InvoiceUseCaseProxyModule';
import { Module } from '@nestjs/common';
import ValidateAdminModule from '@infra/integration/validateAdmin/ValidateAdminModule';
import InvoiceController from './InvoiceController';

@Module({
  imports: [InvoiceUseCaseProxyModule, ValidateAdminModule],
  controllers: [InvoiceController],
})

export default class InvoiceControllerModule {}
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import InvoiceIntegration from './InvoiceIntegration';

@Module({
  imports: [HttpModule],
  providers: [InvoiceIntegration],
  exports: [InvoiceIntegration],
})

export default class InvoiceIntegrationModule {}
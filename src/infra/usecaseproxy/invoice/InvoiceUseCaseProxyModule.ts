import { Module } from '@nestjs/common';
import RespositoryModule from '@infra/repository/company/RepositoryModule';
import InvoiceIntegrationModule from '@infra/integration/invoice/InvoiceIntegrationModule';
import InvoiceUseCaseProxy from './InvoiceUseCaseProxy';

@Module({
  imports: [RespositoryModule, InvoiceIntegrationModule],
  providers: [InvoiceUseCaseProxy],
  exports: [InvoiceUseCaseProxy],
})

export default class InvoiceUseCaseProxyModule {}
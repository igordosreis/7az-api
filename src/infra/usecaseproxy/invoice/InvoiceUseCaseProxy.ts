import { Provider } from '@nestjs/common';
import InvoiceUseCase from '@app/invoice/InvoiceUseCase';
import CompanyRepository from '@infra/repository/company/CompanyRepository';
import InvoiceIntegration from '@infra/integration/invoice/InvoiceIntegration';
import CreateUseProxyProvider from '../helper/CreateUseProxyProvider';

const InvoiceUseCaseProxy: Provider = CreateUseProxyProvider(
  InvoiceUseCase,
  [CompanyRepository, InvoiceIntegration],
);

export default InvoiceUseCaseProxy;
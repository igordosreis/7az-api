import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import ZodPipeLine from '@infra/middleware/global/zod/ZodPipeLine';
import ValidateAdminModule from '@infra/integration/validateAdmin/ValidateAdminModule';
import InvoiceUseCaseProxyModule from '@infra/usecaseproxy/invoice/InvoiceUseCaseProxyModule';
import InvoiceController from './invoice/InvoiceController';

const routes: Routes = [
  {
    path: ' 7az/invoice',
    module: InvoiceController,
  },
];

@Module({
  imports: [
    ValidateAdminModule,
    InvoiceUseCaseProxyModule,
    RouterModule.register(routes),
  ],
  providers: [ZodPipeLine],
  controllers: [InvoiceController],
})
class ControllerModule {}

export default ControllerModule;
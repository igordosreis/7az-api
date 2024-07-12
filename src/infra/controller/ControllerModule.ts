import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import ZodPipeLine from '@infra/middleware/global/zod/ZodPipeLine';
import InvoiceControllerModule from './invoice/InvoiceControllerModule';

const routes: Routes = [
  {
    path: '7az/invoice',
    module: InvoiceControllerModule,
  },
];

@Module({
  imports: [
    InvoiceControllerModule,
    RouterModule.register(routes),
  ],
  providers: [ZodPipeLine],
})
class ControllerModule {}

export default ControllerModule;
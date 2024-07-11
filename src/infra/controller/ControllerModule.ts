import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import ZodPipeLine from '@infra/middleware/global/zod/ZodPipeLine';
import InvoiceController from './invoice/InvoiceController';

const routes: Routes = [
  {
    path: ' 7az/invoice',
    module: InvoiceController,
  },
];

@Module({
  imports: [
    RouterModule.register(routes),
  ],
  providers: [ZodPipeLine],
  controllers: [InvoiceController],
})
class ControllerModule {}

export default ControllerModule;
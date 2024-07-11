import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import ZodPipeLine from '@infra/middleware/global/zod/ZodPipeLine';

const routes: Routes = [
];

@Module({
  imports: [
    RouterModule.register(routes),
  ],
  providers: [ZodPipeLine],
})
class ControllerModule {}

export default ControllerModule;
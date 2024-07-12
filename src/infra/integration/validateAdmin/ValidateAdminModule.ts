import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import ValidateAdmin from './ValidateAdmin';

@Module({
  imports: [HttpModule],
  providers: [ValidateAdmin],
  exports: [ValidateAdmin],
})
class ValidateAdminModule {}

export default ValidateAdminModule;
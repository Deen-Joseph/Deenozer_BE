import { Module } from '@nestjs/common';
import { FaService } from './fa.service';
import { FaController } from './fa.controller';

@Module({
  imports: [],
  controllers: [FaController],
  exports: [FaService],
  providers: [FaService],
})
export class FaModule {}

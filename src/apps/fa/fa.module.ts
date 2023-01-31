import { Module } from '@nestjs/common';
import { FaService } from './fa.service';
import { FaController } from './fa.controller';
import { Fa } from './entities/fa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Fa])],
  controllers: [FaController],
  exports: [TypeOrmModule, FaService],
  providers: [FaService],
})
export class FaModule {}

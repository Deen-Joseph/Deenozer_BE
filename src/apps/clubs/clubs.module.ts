import { Module } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Club } from './entities/club.entity';

@Module({
  imports: [],
  controllers: [ClubsController],
  exports: [ClubsService],
  providers: [ClubsService],
})
export class ClubsModule {}

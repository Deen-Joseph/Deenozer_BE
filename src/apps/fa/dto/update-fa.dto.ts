import { PartialType } from '@nestjs/mapped-types';
import { CreateFaDto } from './create-fa.dto';

export class UpdateFaDto extends PartialType(CreateFaDto) {}

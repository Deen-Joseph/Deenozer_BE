import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFaDto } from './dto/create-fa.dto';
import { UpdateFaDto } from './dto/update-fa.dto';
import { Fa } from './entities/fa.entity';

@Injectable()
export class FaService {
  constructor(
    @InjectRepository(Fa)
    private readonly userRepository: Repository<Fa>,
  ) {}

  create(createFaDto: CreateFaDto) {
    const fa: Fa = new Fa();

    fa.about = createFaDto.about;
    // fa.attachFile = createFaDto.attachFile;
    fa.fa_name = createFaDto.fa_name;
    fa.dof = createFaDto.dof;
    fa.confederation = createFaDto.confederation;
    fa.nationality = createFaDto.nationality;
    fa.ranking = createFaDto.ranking;
    return this.userRepository.save(fa);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({
      id: id,
    });
  }

  update(id: number, updateFaDto: UpdateFaDto) {
    const fa: Fa = new Fa();
    fa.id = id;
    fa.about = updateFaDto.about;
    // fa.attachFile = updateFaDto.attachFile;
    fa.fa_name = updateFaDto.fa_name;
    fa.dof = updateFaDto.dof;
    fa.confederation = updateFaDto.confederation;
    fa.nationality = updateFaDto.nationality;
    fa.ranking = updateFaDto.ranking;
    return this.userRepository.save(fa);
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }
}

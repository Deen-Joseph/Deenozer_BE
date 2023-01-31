import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { Club } from './entities/club.entity';

@Injectable()
export class ClubsService {
  constructor(
    @InjectRepository(Club)
    private readonly userRepository: Repository<Club>,
  ) {}

  create(createClubDto: CreateClubDto) {
    const club: Club = new Club();

    club.about = createClubDto.about;
    // club.attachFile = createclubDto.attachFile;
    club.club_name = createClubDto.club_name;
    club.dof = createClubDto.dof;
    club.league_name = createClubDto.league_name;
    club.confederation = createClubDto.confederation;
    club.nationality = createClubDto.nationality;
    club.ranking = createClubDto.ranking;
    return this.userRepository.save(club);
  }

  findAll(): Promise<Club[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({
      id: id,
    });
  }

  update(id: number, updateClubDto: UpdateClubDto) {
    const club: Club = new Club();

    club.about = updateClubDto.about;
    // club.attachFile = updateClubDto.attachFile;
    club.club_name = updateClubDto.club_name;
    club.dof = updateClubDto.dof;
    club.league_name = updateClubDto.league_name;
    club.confederation = updateClubDto.confederation;
    club.nationality = updateClubDto.nationality;
    club.ranking = updateClubDto.ranking;
    return this.userRepository.save(club);
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }
}

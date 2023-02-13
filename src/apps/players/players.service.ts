import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private readonly userRepository: Repository<Player>,
  ) {}

  create(createPlayerDto: CreatePlayerDto , file:any) {
    const player: Player = new Player();
   
    player.about = createPlayerDto.about;
    player.attachFile = file;
    player.club = createPlayerDto.club;
    player.dob = createPlayerDto.dob;
    player.first_name = createPlayerDto.first_name;
    player.last_name = createPlayerDto.last_name;
    player.gender = createPlayerDto.gender;
    player.nationality = createPlayerDto.nationality;
    player.position = createPlayerDto.position;
    player.ranking = createPlayerDto.ranking;
    return this.userRepository.save(player);
  }

  findAll(): Promise<Player[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({
      id: id,
    });
  }

  update(id: number, updatePlayerDto: UpdatePlayerDto) {
    const player: Player = new Player();
    player.id = id;
    player.about = updatePlayerDto.about;
    player.attachFile = updatePlayerDto.attachFile;
    player.club = updatePlayerDto.club;
    player.dob = updatePlayerDto.dob;
    player.first_name = updatePlayerDto.first_name;
    player.last_name = updatePlayerDto.last_name;
    player.gender = updatePlayerDto.gender;
    player.nationality = updatePlayerDto.nationality;
    player.position = updatePlayerDto.position;
    return this.userRepository.save(player);
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }
}

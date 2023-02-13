import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import { Club } from './entities/club.entity';

@Injectable()
export class ClubsService {
  private client: ClientProxy;
  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6379,
      },
    });
  }

  create(createClubDto: CreateClubDto) {
    return this.client.send('createClub', createClubDto);
  }

  findAll(){
    return this.client.send('findAllClubs', '');
  }

  findOne(id: number) {
    return this.client.send('findOneClub', id);
  }

  update(id: number, updateClubDto: UpdateClubDto) {
    return this.client.send('updateClub', { id, updateClubDto });
  }

  remove(id: number) {
    return this.client.send('removeClub', id);
  }
}

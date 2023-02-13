import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { CreateFaDto } from './dto/create-fa.dto';
import { UpdateFaDto } from './dto/update-fa.dto';
import { Fa } from './entities/fa.entity';

@Injectable()
export class FaService {
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

  create(createFaDto: CreateFaDto) {
    return this.client.send('createClub', createFaDto);
  }

  findAll() {
    return this.client.send('findAllClubs', '');
  }

  findOne(id: number) {
    return this.client.send('findOneClub', id);
  }

  update(id: number, updateFaDto: UpdateFaDto) {
    return this.client.send('updateClub', { id, updateFaDto });
  }

  remove(id: number) {
    return this.client.send('removeClub', id);
  }
}

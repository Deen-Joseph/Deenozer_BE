import { Test, TestingModule } from '@nestjs/testing';
import { FaController } from './fa.controller';
import { FaService } from './fa.service';

describe('FaController', () => {
  let controller: FaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaController],
      providers: [FaService],
    }).compile();

    controller = module.get<FaController>(FaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

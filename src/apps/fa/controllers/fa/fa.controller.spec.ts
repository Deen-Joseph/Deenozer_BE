import { Test, TestingModule } from '@nestjs/testing';
import { FaController } from './fa.controller';

describe('FaController', () => {
  let controller: FaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaController],
    }).compile();

    controller = module.get<FaController>(FaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

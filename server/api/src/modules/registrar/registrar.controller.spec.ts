import { Test, TestingModule } from '@nestjs/testing';
import { RegistrarController } from './registrar.controller';
import { RegistrarService } from './registrar.service';

describe('RegistrarController', () => {
  let controller: RegistrarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RegistrarController],
      providers: [RegistrarService],
    }).compile();

    controller = module.get<RegistrarController>(RegistrarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

})

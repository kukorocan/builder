import { Test, TestingModule } from '@nestjs/testing';
import { HtmlbuilderController } from './htmlbuilder.controller';
import { HtmlbuilderService } from './htmlbuilder.service';

describe('HtmlbuilderController', () => {
  let controller: HtmlbuilderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HtmlbuilderController],
      providers: [HtmlbuilderService],
    }).compile();

    controller = module.get<HtmlbuilderController>(HtmlbuilderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

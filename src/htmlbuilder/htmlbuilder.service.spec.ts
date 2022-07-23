import { Test, TestingModule } from '@nestjs/testing';
import { HtmlbuilderService } from './htmlbuilder.service';

describe('HtmlbuilderService', () => {
  let service: HtmlbuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HtmlbuilderService],
    }).compile();

    service = module.get<HtmlbuilderService>(HtmlbuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

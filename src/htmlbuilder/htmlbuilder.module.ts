import { Module } from '@nestjs/common';
import { HtmlbuilderService } from './htmlbuilder.service';
import { HtmlbuilderController } from './htmlbuilder.controller';

@Module({
  controllers: [HtmlbuilderController],
  providers: [HtmlbuilderService]
})
export class HtmlbuilderModule {}

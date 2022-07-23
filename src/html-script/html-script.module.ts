import { Module } from '@nestjs/common';
import {htmlController} from './html.controller';
import { htmlService } from './html.service';

@Module({
    controllers: [htmlController],
    providers: [htmlService]
})
export class HtmlScriptModule {}

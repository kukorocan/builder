import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HtmlbuilderService } from './htmlbuilder.service';
import { CreateHtmlbuilderDto } from './dto/create-htmlbuilder.dto';
import { UpdateHtmlbuilderDto } from './dto/update-htmlbuilder.dto';

@Controller('htmlbuilder')
export class HtmlbuilderController {
  constructor(private readonly htmlbuilderService: HtmlbuilderService) {}

  @Post()
  create(@Body() createHtmlbuilderDto: CreateHtmlbuilderDto) {
    return this.htmlbuilderService.create(createHtmlbuilderDto);
  }

  @Get()
  findAll() {
    return this.htmlbuilderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.htmlbuilderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHtmlbuilderDto: UpdateHtmlbuilderDto) {
    return this.htmlbuilderService.update(+id, updateHtmlbuilderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.htmlbuilderService.remove(+id);
  }
}

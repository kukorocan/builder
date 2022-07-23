import { Injectable } from '@nestjs/common';
import { CreateHtmlbuilderDto } from './dto/create-htmlbuilder.dto';
import { UpdateHtmlbuilderDto } from './dto/update-htmlbuilder.dto';

@Injectable()
export class HtmlbuilderService {
  create(createHtmlbuilderDto: CreateHtmlbuilderDto) {
    return 'This action adds a new htmlbuilder';
  }

  findAll() {
    return `This action returns all htmlbuilder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} htmlbuilder`;
  }

  update(id: number, updateHtmlbuilderDto: UpdateHtmlbuilderDto) {
    return `This action updates a #${id} htmlbuilder`;
  }

  remove(id: number) {
    return `This action removes a #${id} htmlbuilder`;
  }
}

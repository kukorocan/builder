import { PartialType } from '@nestjs/mapped-types';
import { CreateHtmlbuilderDto } from './create-htmlbuilder.dto';

export class UpdateHtmlbuilderDto extends PartialType(CreateHtmlbuilderDto) {}

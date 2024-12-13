import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { SubjectsService } from './subjects.service'
import { CreateSubjectDto } from './dto/create-subject.dto'
import { UpdateSubjectDto } from './dto/update-subject.dto'

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectService: SubjectsService) {}

  @Post()
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectService.create(createSubjectDto)
  }

  @Get()
  findAll() {
    return this.subjectService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectService.update(id, updateSubjectDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subjectService.remove(id)
  }
}

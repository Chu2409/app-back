import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { CreateSemesterDto } from './dto/create-semester.dto'
import { UpdateSemesterDto } from './dto/update-semester.dto'
import { SemestersService } from './semesters.service'

@Controller('semesters')
export class SemestersController {
  constructor(private readonly semesterService: SemestersService) {}

  @Post()
  async create(@Body() createSemesterDto: CreateSemesterDto) {
    return await this.semesterService.create(createSemesterDto)
  }

  @Get()
  async findAll() {
    return await this.semesterService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.semesterService.findOne(id)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSemesterDto: UpdateSemesterDto,
  ) {
    return await this.semesterService.update(id, updateSemesterDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.semesterService.remove(id)
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { SubmissionsService } from './submissions.service'
import { CreateSubmissionDto } from './dto/create-submission.dto'
import { UpdateSubmissionDto } from './dto/update-submission.dto'

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionService: SubmissionsService) {}

  @Post()
  create(@Body() createSubmissionDto: CreateSubmissionDto) {
    return this.submissionService.create(createSubmissionDto)
  }

  @Get()
  findAll() {
    return this.submissionService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.submissionService.findOne(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubmissionDto: UpdateSubmissionDto,
  ) {
    return this.submissionService.update(id, updateSubmissionDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.submissionService.remove(id)
  }
}

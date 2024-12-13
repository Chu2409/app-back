import { Injectable } from '@nestjs/common'
import { CreateSubmissionDto } from './dto/create-submission.dto'
import { UpdateSubmissionDto } from './dto/update-submission.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class SubmissionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSubmissionDto: CreateSubmissionDto) {
    return this.prisma.assignmentSubmission.create({
      data: createSubmissionDto,
    })
  }

  async findAll() {
    return this.prisma.assignmentSubmission.findMany()
  }

  async findOne(id: string) {
    return this.prisma.assignmentSubmission.findUnique({
      where: { id },
    })
  }

  async update(id: string, updateSubmissionDto: UpdateSubmissionDto) {
    return this.prisma.assignmentSubmission.update({
      where: { id },
      data: updateSubmissionDto,
    })
  }

  async remove(id: string) {
    return this.prisma.assignmentSubmission.delete({
      where: { id },
    })
  }
}

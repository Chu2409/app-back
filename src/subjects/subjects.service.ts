import { Injectable } from '@nestjs/common'
import { CreateSubjectDto } from './dto/create-subject.dto'
import { UpdateSubjectDto } from './dto/update-subject.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class SubjectsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSubjectDto: CreateSubjectDto) {
    return this.prisma.subject.create({
      data: createSubjectDto,
    })
  }

  async findAll() {
    return this.prisma.subject.findMany()
  }

  async findOne(id: string) {
    return this.prisma.subject.findUnique({
      where: { id },
    })
  }

  async update(id: string, updateSubjectDto: UpdateSubjectDto) {
    return this.prisma.subject.update({
      where: { id },
      data: updateSubjectDto,
    })
  }

  async remove(id: string) {
    return this.prisma.subject.delete({
      where: { id },
    })
  }
}

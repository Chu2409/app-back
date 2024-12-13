import { Injectable } from '@nestjs/common'
import { CreateAssignmentDto } from './dto/create-assignment.dto'
import { UpdateAssignmentDto } from './dto/update-assignment.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class AssignmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAssignmentDto: CreateAssignmentDto) {
    return this.prisma.assignment.create({
      data: createAssignmentDto,
    })
  }

  async findAll() {
    return this.prisma.assignment.findMany()
  }

  async findOne(id: string) {
    return this.prisma.assignment.findUnique({
      where: { id },
    })
  }

  async update(id: string, updateAssignmentDto: UpdateAssignmentDto) {
    return this.prisma.assignment.update({
      where: { id },
      data: updateAssignmentDto,
    })
  }

  async remove(id: string) {
    return this.prisma.assignment.delete({
      where: { id },
    })
  }
}

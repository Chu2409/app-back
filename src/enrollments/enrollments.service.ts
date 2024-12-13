import { Injectable } from '@nestjs/common'
import { CreateEnrollmentDto } from './dto/create-enrollment.dto'
import { UpdateEnrollmentDto } from './dto/update-enrollment.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class EnrollmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createEnrollmentDto: CreateEnrollmentDto) {
    return this.prisma.enrollment.create({
      data: createEnrollmentDto,
    })
  }

  async findAll() {
    return this.prisma.enrollment.findMany()
  }

  async findOne(id: string) {
    return this.prisma.enrollment.findUnique({
      where: { id },
    })
  }

  async update(id: string, updateEnrollmentDto: UpdateEnrollmentDto) {
    return this.prisma.enrollment.update({
      where: { id },
      data: updateEnrollmentDto,
    })
  }

  async remove(id: string) {
    return this.prisma.enrollment.delete({
      where: { id },
    })
  }
}

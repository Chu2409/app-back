import { Injectable } from '@nestjs/common'
import { CreateSemesterDto } from './dto/create-semester.dto'
import { UpdateSemesterDto } from './dto/update-semester.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class SemestersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createSemesterDto: CreateSemesterDto) {
    return await this.prisma.semester.create({
      data: createSemesterDto,
    })
  }

  async findAll() {
    return await this.prisma.semester.findMany({
      include: {
        subjects: {
          include: {
            enrollments: {
              include: {
                student: true,
              },
            },
            assignments: {
              include: {
                submissions: true,
              },
            },
            schedules: true,
          },
        },
      },
    })
  }

  async findOne(id: string) {
    return await this.prisma.semester.findUnique({
      where: { id },
    })
  }

  async update(id: string, updateSemesterDto: UpdateSemesterDto) {
    return await this.prisma.semester.update({
      where: { id },
      data: updateSemesterDto,
    })
  }

  async remove(id: string) {
    return await this.prisma.semester.delete({
      where: { id },
    })
  }
}

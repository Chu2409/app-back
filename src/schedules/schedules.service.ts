import { Injectable } from '@nestjs/common'
import { CreateScheduleDto } from './dto/create-schedule.dto'
import { UpdateScheduleDto } from './dto/update-schedule.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class SchedulesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createScheduleDto: CreateScheduleDto) {
    return await this.prisma.schedule.create({
      data: createScheduleDto,
    })
  }

  async findAll() {
    return await this.prisma.schedule.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.schedule.findUnique({
      where: { id },
    })
  }

  async update(id: string, updateScheduleDto: UpdateScheduleDto) {
    return await this.prisma.schedule.update({
      where: { id },
      data: updateScheduleDto,
    })
  }

  async remove(id: string) {
    return await this.prisma.schedule.delete({
      where: { id },
    })
  }
}

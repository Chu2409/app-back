import { Injectable } from '@nestjs/common'
import { CreateResourceDto } from './dto/create-resource.dto'
import { UpdateResourceDto } from './dto/update-resource.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class ResourcesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createResourceDto: CreateResourceDto) {
    return await this.prisma.resource.create({
      data: createResourceDto,
    })
  }

  async findAll() {
    return await this.prisma.resource.findMany()
  }

  async findOne(id: string) {
    return await this.prisma.resource.findUnique({
      where: { id },
    })
  }

  async update(id: string, updateResourceDto: UpdateResourceDto) {
    return await this.prisma.resource.update({
      where: { id },
      data: updateResourceDto,
    })
  }

  async remove(id: string) {
    return await this.prisma.resource.delete({
      where: { id },
    })
  }
}

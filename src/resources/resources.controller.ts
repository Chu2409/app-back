import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { ResourcesService } from './resources.service'
import { CreateResourceDto } from './dto/create-resource.dto'
import { UpdateResourceDto } from './dto/update-resource.dto'

@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourceService: ResourcesService) {}

  @Post()
  async create(@Body() createResourceDto: CreateResourceDto) {
    return await this.resourceService.create(createResourceDto)
  }

  @Get()
  async findAll() {
    return await this.resourceService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.resourceService.findOne(id)
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateResourceDto: UpdateResourceDto,
  ) {
    return await this.resourceService.update(id, updateResourceDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.resourceService.remove(id)
  }
}

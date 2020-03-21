import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param
} from '@nestjs/common';
import { CreateClassDto } from './dto/createClass.dto';
import { ClassesService } from './classes.service';
import { Class } from './types/class.type';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('classes')
@Controller('classes')
export class ClassesController {
  constructor(private readonly classesService: ClassesService) {
  }

  @Get()
  findAll(): Promise<Class[]> {
    return this.classesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Class> {
    return this.classesService.findOne(id);
  }

  @Post()
  create(@Body() createClassDto: CreateClassDto): Promise<Class> {
    return this.classesService.create(createClassDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Class> {
    return this.classesService.delete(id);
  }

  @Put(':id')
  update(@Body() createClassDto: CreateClassDto, @Param('id') id: string): Promise<Class> {
    return this.classesService.update(id, createClassDto);
  }
}

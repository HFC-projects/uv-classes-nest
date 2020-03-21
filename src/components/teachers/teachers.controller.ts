import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param
} from '@nestjs/common';
import { CreateTeacherDto } from './dto/createTeacher.dto';
import { TeachersService } from './teachers.service';
import { Teacher } from './types/teacher.type';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('teachers')
@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {
  }

  @Get()
  findAll(): Promise<Teacher[]> {
    return this.teachersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Teacher> {
    return this.teachersService.findOne(id);
  }

  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto): Promise<Teacher> {
    return this.teachersService.create(createTeacherDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Teacher> {
    return this.teachersService.delete(id);
  }

  @Put(':id')
  update(@Body() createTeacherDto: CreateTeacherDto, @Param('id') id: string): Promise<Teacher> {
    return this.teachersService.update(id, createTeacherDto);
  }
}

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param
} from '@nestjs/common';
import { CreateStudentDto } from './dto/createStudent.dto';
import { StudentsService } from './students.service';
import { Student } from './types/student.type';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('students')
@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {
  }

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Student> {
    return this.studentsService.findOne(id);
  }

  @Post()
  create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentsService.create(createStudentDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Student> {
    return this.studentsService.delete(id);
  }

  @Put(':id')
  update(@Body() updateStudentDto: CreateStudentDto, @Param('id') id: string): Promise<Student> {
    return this.studentsService.update(id, updateStudentDto);
  }
}

import { Module } from '@nestjs/common';
import { TeachersController } from './teachers.controller';
import { TeachersService } from './teachers.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TeacherSchema } from './schemas/teacher.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Teacher', schema: TeacherSchema }])],
  controllers: [TeachersController],
  providers: [TeachersService]
})
export class TeachersModule {
}

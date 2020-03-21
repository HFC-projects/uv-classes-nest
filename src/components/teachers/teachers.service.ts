import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Teacher } from './types/teacher.type';

@Injectable()
export class TeachersService {
  constructor(@InjectModel('Teacher') private readonly TeacherModel: Model<Teacher>) {
  }

  async findAll(): Promise<Teacher[]> {
    return await this.TeacherModel.find();
  }

  async findOne(id: string): Promise<Teacher> {
    return await this.TeacherModel.findOne({ id: id });
  }

  async create(teacher: Teacher): Promise<Teacher> {
    const newTeacher = new this.TeacherModel(teacher);
    return await newTeacher.save();
  }

  async delete(id: string): Promise<Teacher> {
    return await this.TeacherModel.findOneAndRemove({ id });
  }

  async update(id: string, teacher: Teacher): Promise<Teacher> {
    return await this.TeacherModel.findOneAndUpdate({ id }, teacher);
  }
}
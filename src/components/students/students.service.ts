import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from './types/student.type';

@Injectable()
export class StudentsService {
  constructor(@InjectModel('Student') private readonly StudentModel: Model<Student>) {
  }

  async findAll(): Promise<Student[]> {
    return await this.StudentModel.find();
  }

  async findOne(id: string): Promise<Student> {
    return await this.StudentModel.findOne({ id: id });
  }

  async create(student: Student): Promise<Student> {
    const newStudent = new this.StudentModel(student);
    return await newStudent.save();
  }

  async delete(id: string): Promise<Student> {
    return await this.StudentModel.findOneAndRemove({ id });
  }

  async update(id: string, student: Student): Promise<Student> {
    return await this.StudentModel.findOneAndUpdate({ id }, student);
  }
}
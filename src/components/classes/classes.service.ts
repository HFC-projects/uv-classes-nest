import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Class } from './types/class.type';

@Injectable()
export class ClassesService {
  constructor(@InjectModel('Class') private readonly ClassModel: Model<Class>) {
  }

  async findAll(): Promise<Class[]> {
    return await this.ClassModel.find();
  }

  async findOne(id: string): Promise<Class> {
    return await this.ClassModel.findOne({ id: id });
  }

  async create(ourClass: Class): Promise<Class> {
    const newClass = new this.ClassModel(ourClass);
    return await newClass.save();
  }

  async delete(id: string): Promise<Class> {
    return await this.ClassModel.findOneAndRemove({ id });
  }

  async update(id: string, ourClass: Class): Promise<Class> {
    return await this.ClassModel.findOneAndUpdate({ id }, ourClass);
  }
}
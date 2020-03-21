import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Room } from './types/room.type';

@Injectable()
export class RoomsService {
  constructor(@InjectModel('Room') private readonly RoomModel: Model<Room>) {
  }

  async findAll(): Promise<Room[]> {
    return await this.RoomModel.find();
  }

  async findOne(id: string): Promise<Room> {
    return await this.RoomModel.findOne({ id: id });
  }

  async create(Room: Room): Promise<Room> {
    const newRoom = new this.RoomModel(Room);
    return await newRoom.save();
  }

  async delete(id: string): Promise<Room> {
    return await this.RoomModel.findOneAndRemove({ id });
  }

  async update(id: string, Room: Room): Promise<Room> {
    return await this.RoomModel.findOneAndUpdate({ id }, Room);
  }
}
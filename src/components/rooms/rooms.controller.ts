import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param
} from '@nestjs/common';
import { CreateRoomDto } from './dto/createRoom.dto';
import { RoomsService } from './rooms.service';
import { Room } from './types/room.type';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('rooms')
@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {
  }

  @Get()
  findAll(): Promise<Room[]> {
    return this.roomsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Room> {
    return this.roomsService.findOne(id);
  }

  @Post()
  create(@Body() createRoomDto: CreateRoomDto): Promise<Room> {
    return this.roomsService.create(createRoomDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Room> {
    return this.roomsService.delete(id);
  }

  @Put(':id')
  update(@Body() updateRoomDto: CreateRoomDto, @Param('id') id: string): Promise<Room> {
    return this.roomsService.update(id, updateRoomDto);
  }
}

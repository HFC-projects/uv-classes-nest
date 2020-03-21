import { Module } from '@nestjs/common';
import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassSchema } from './schemas/class.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Class', schema: ClassSchema }])],
  controllers: [ClassesController],
  providers: [ClassesService]
})
export class ClassesModule {
}

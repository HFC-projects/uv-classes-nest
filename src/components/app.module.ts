import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ClassesModule } from './classes/classes.module';
import { RoomsModule } from './rooms/rooms.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import Config from '../config/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '../common/logger.interceptor';

@Module({
  imports: [
    RoomsModule,
    ClassesModule,
    StudentsModule,
    TeachersModule,
    MongooseModule.forRoot(Config.MONGO_URL)
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    }
  ]
})
export class AppModule {
}

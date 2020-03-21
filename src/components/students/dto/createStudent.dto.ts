import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly id: string;
}
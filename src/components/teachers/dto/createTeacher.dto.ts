import { ApiProperty } from '@nestjs/swagger';

export class CreateTeacherDto {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly id: string;
}
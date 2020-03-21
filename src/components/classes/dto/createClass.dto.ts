import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateClassDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly name: string;

  @ApiPropertyOptional()
  readonly participants: string[];

  @ApiProperty({
    description: 'ISO date'
  })
  readonly occurrence: string;

  @ApiProperty()
  readonly room: string;

  @ApiProperty()
  readonly teacher: string;
}
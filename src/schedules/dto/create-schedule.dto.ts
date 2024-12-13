import { IsNotEmpty, IsString } from 'class-validator'

export class CreateScheduleDto {
  @IsNotEmpty()
  @IsString()
  day: string

  @IsNotEmpty()
  @IsString()
  time: string

  @IsNotEmpty()
  @IsString()
  subjectId: string
}

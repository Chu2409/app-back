import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsDateString,
  IsUUID,
} from 'class-validator'

export class CreateAssignmentDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  title: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsDateString()
  dueDate: string

  @IsString()
  @IsNotEmpty()
  status: string

  @IsUUID()
  subjectId: string
}

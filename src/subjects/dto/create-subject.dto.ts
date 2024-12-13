import {
  IsNotEmpty,
  MaxLength,
  IsString,
  IsInt,
  Min,
  IsUUID,
} from 'class-validator'

export class CreateSubjectDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  professor: string

  @IsInt()
  @Min(1)
  credits: number

  @IsString()
  @IsNotEmpty()
  status: string

  @IsUUID()
  semesterId: string
}

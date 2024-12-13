import {
  IsBoolean,
  IsOptional,
  IsDateString,
  IsInt,
  IsString,
  IsUUID,
} from 'class-validator'

export class CreateSubmissionDto {
  @IsBoolean()
  isSubmitted: boolean

  @IsOptional()
  @IsDateString()
  submittedAt?: string

  @IsOptional()
  @IsInt()
  grade?: number

  @IsOptional()
  @IsString()
  feedback?: string

  @IsUUID()
  studentId: string

  @IsUUID()
  assignmentId: string
}

import { IsUUID, IsOptional, IsInt, IsBoolean } from 'class-validator'

export class CreateEnrollmentDto {
  @IsUUID()
  studentId: string

  @IsUUID()
  subjectId: string

  @IsOptional()
  @IsInt()
  finalGrade?: number

  @IsBoolean()
  isActive: boolean
}

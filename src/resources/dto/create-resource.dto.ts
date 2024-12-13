import { IsNotEmpty, IsString, IsUrl, IsOptional } from 'class-validator'

export class CreateResourceDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  type: string

  @IsNotEmpty()
  @IsUrl()
  url: string

  @IsOptional()
  @IsString()
  assignmentId?: string

  @IsOptional()
  @IsString()
  submissionId?: string
}

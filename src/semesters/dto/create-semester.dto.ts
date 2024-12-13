import { IsString, IsNotEmpty } from 'class-validator'

export class CreateSemesterDto {
  @IsString()
  @IsNotEmpty()
  name: string
}

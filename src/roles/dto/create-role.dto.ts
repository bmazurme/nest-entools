import { IsOptional, IsString, Length } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @IsOptional()
  @Length(2, 200)
  name: string;

  @IsString()
  @Length(2, 200)
  description?: string;
}

import { PartialType } from '@nestjs/mapped-types';

import { CreateUserDto } from './create-user.dto';

export class UpdateUserStatusDto extends PartialType(CreateUserDto) {
  status: string;
}

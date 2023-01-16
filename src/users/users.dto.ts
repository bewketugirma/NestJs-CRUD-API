import { ApiProperty } from '@nestjs/swagger';
export class UsersDTO {

id?: number;

@ApiProperty()
name: string;

@ApiProperty()
role: string;

@ApiProperty()
description?: string;

@ApiProperty()
managerId?: number;

@ApiProperty()
experience?: number;
}

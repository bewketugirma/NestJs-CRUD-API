import {Controller,Get,Query,Post,Put,Patch,Delete,Body,Param,HttpStatus,
} from '@nestjs/common';
import { ApiTags,ApiOkResponse } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { UsersDTO } from './users.dto';
import { UsersEntity } from './users.entity';
@ApiTags("Test Api")
@Controller('users')
export class UsersController {
constructor(private usersService: UsersService) {}
@Get('/getUsers')
async showAllUsers() {
const users = await this.usersService.showAll();
return {
users
};
}
@Post('/createUser')
async createUsers(@Body()  req: UsersDTO) {
const user = await this.usersService.create(req);
return {
statusCode: HttpStatus.OK,
message: 'User created successfully',
user
};
}

@Get('getUserById/:id')
@ApiOkResponse({type: UsersEntity,
  })
async readUser(@Param('id') id: number) {
return await this.usersService.read(id);
//findByRole
}
@Get('findByRole/:role')
findByRole(@Param('role') role:string) {
  return this.usersService.findByRole(role);
}

@Get('getHierarchy')
async findTree(): Promise<UsersEntity[]> {
const data=await this.usersService.findTree();
return data
}
@Get('getParent')
findParent(): Promise<UsersEntity[]> {
  return this.usersService.findParent();
}

@Put('updateUserById/:id')
async uppdateUser(@Param('id') id: number, @Body() data: UsersDTO) {
await this.usersService.update(id, data);
return {
statusCode: HttpStatus.OK,
message: 'User updated successfully',
};
}
@Delete('deleteuserById/:id')
async deleteUser(@Param('id') id: number) {
await this.usersService.destroy(id);
return {
statusCode: HttpStatus.OK,
message: 'User deleted successfully',
};
}
}

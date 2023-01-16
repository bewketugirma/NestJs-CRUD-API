import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { UsersEntity } from './users.entity';
import { UsersDTO } from './users.dto';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
    private dataSource: DataSource,
  ) {}
  async showAll() {
    return await this.usersRepository.find();
  }
  // get the hierarchy
  async findTree(): Promise<UsersEntity[]> {
    return await this.dataSource.manager
      .getTreeRepository(UsersEntity)
      .findTrees();
    //return rootUsers;
  }
  //get Parent Node
  async findParent(): Promise<UsersEntity[]> {
    const rootUsers = await this.dataSource.manager
      .getTreeRepository(UsersEntity).findRoots();
    return rootUsers;
  }
    //get Child Node
    
  //create a new user
  async create(data: UsersDTO) {
    let parentInfo: UsersEntity;
    const userDomain = new UsersEntity();
    if (data.managerId) {
      parentInfo = await this.usersRepository.findOneBy({
        id: data.managerId,
      });
    }
    //parent id is optional
    if (parentInfo) {
      userDomain.manager = parentInfo;
    }
    userDomain.name = data.name;
    userDomain.role = data.role;
    userDomain.exprience=data.experience;
    userDomain.description=data.description;
    userDomain.managerId=data.managerId;
    await this.usersRepository.save(userDomain);
    return userDomain;
  }
  
  async findByRole(role: string)
   {
    return await this.usersRepository.findOne({
      where: {
        role: role,
      },
    });
  }
  async read(id: number) {
    return await this.usersRepository.find({
      where: { id: id },
      relations: ['nodes'],
    });
  }
  async update(id: number, data: Partial<UsersDTO>) {
    const result = await this.usersRepository.update({ id }, data);
    return result;
  }
  async destroy(id: number) {
    await this.usersRepository.delete({ id });
    return { deleted: true };
  }
}
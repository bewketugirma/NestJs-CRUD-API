import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersEntity } from './users/users.entity';
@Module({
  imports: [TypeOrmModule.forRoot(
{
"type": "mysql",
"host": "127.0.0.1",
"username": "root",
"password": null,
"database": "nest_db",
"synchronize": true,
autoLoadEntities: true,
"logging": true,
"entities": [UsersEntity]
}
  ), UsersModule],
  controllers: [AppController],
  providers: [AppService],
}
)


export class AppModule {}

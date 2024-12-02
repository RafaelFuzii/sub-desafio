import { Controller, Get, Post, Body, Param, Delete, Put, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('allUsers')
  findAll() {
    return new HttpException("Retornando todos os usuarios", HttpStatus.FOUND)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return new HttpException("Retornando todos os usuarios", HttpStatus.FOUND)
  }

  @Put('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return new HttpException("Retornando todos os usuarios", HttpStatus.OK)
  }
}

import { Controller } from '@nestjs/common';
import { Controller, Get, Body, Param, Post, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';

// DTO
import { UserDto } from './dto/user.dto';


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOneById(@Param() params): Promise<UserDto> {
        return await this.userService.findById(params.id);
    }

    @Post()
    async create(@Body() user: UserDto): Promise<UserDto> {
        return await this.userService.insert(user) as UserDto;
    }

    @Put(':id')
    async update(@Body() updatedUser: UserDto, @Param() params): Promise<UserDto> {
        const oldUser = await this.userService.findById(params.id);
        return await this.userService.update(oldUser, updatedUser);
    }

    @Delete(':id')
    async delete(@Param() params) {
        return await this.userService.delete(params.id);
    }



}

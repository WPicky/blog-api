import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { UserDto } from './dto/user.dto'


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findById(id: string): Promise<User> {
        try {
            return await this.userRepository.findOne(id);
        } catch (err) {
            return err;
        }
    }

    async insert(user: UserDto): Promise< User> {
        const newUser = new  User();

        Object.keys(user).forEach((key) => {
            newUser[key] = user[key];
        });

        try {
            return await this.userRepository.save(newUser);
        } catch (err) {
            return err;
        }
    }

    async update(oldUser:  User, updated_values: UserDto): Promise< User> {
        const updatedUser = oldUser;

        Object.keys(updated_values).forEach((key) => {
            updatedUser[key] = updated_values[key];
        });

        try {
            return await this.userRepository.save(updatedUser);
        } catch (err) {
            return err;
        }

    }

    async delete(id: string) {
        try {
            return await this.userRepository.delete(id);
        } catch (err) {
            return err;
        }
    }


}

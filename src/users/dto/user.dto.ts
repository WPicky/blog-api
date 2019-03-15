import {getCopyConstructions, getOrDefault} from "../../utils/copy-constructor.tools";
import { UserCategory } from '../enums/user-category.enum';

export class UserDto {
    readonly id: string;
    readonly email: string;
    readonly password: string;
    readonly lastname: string;
    readonly firstname: string;
    readonly category: UserCategory;
    readonly mobilePhone: string;
    readonly avatar: ArrayBuffer;
    readonly comments: Comment[];
    readonly createdAt: Date;
    readonly updatedAt: Date;


}



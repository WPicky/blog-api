import {getCopyConstructions, getOrDefault} from "../../utils/copy-constructor.tools";

export class UserDto {
    readonly id: number
    readonly email: string;
    readonly password: string;
    readonly lastname: string;
    readonly firstname: string;
    readonly category: 'Author' | 'Admin' | 'Standard';
    readonly mobilePhone: string;
    readonly avatar: string;
    readonly comments: Comment[];
    readonly createdAt: Date;
    readonly updatedAt: Date;


}


//(avatar: Buffer | File)

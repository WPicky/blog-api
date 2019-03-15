export class UserDto {
    readonly id: number
    readonly email: string;
    readonly password: string;
    readonly nom: string;
    readonly prenom: string;
    readonly type: 'Author' | 'Admin' | 'Standard';
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly avatar: string;
}

//(avatar: Buffer | File)

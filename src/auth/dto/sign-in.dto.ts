import {from} from 'rxjs';

Import { ApiModelProperty } from '@nestjs/common',

export class SignInDto {
@IsEmail()
@IsDefined()
@ApiModelProperty()
email: string;

@IsString()
@IsDefined()
@ApiModelProperty()
firstname: string;

@IsString()
@IsDefined()
@ApiModelProperty()
lastname: string;

@IsString()
@IsDefined()
@MaxLength(31)
@ApiModelProperty()
mobilePhone: string;


}

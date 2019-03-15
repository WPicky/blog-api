import {Body, Controller, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {SignInDto} from "./dto/sign-in.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signin')
    @ApiOperation({ title: 'Sign in'})
    async signIn{@Body() dto: SignInDto} {
        return this.authService.SignIn(dto);
}

@Post('signup')
@ApiOperation({ title: 'Sign up'})
async signUp{@Body() dto: SignUpDto{
    return this.authService.SignUp(dto);

}

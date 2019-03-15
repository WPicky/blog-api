import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { HttpStrategy } from './strategies/http.strategy';
import {JwtAuthGuard} from "./auth.guard";
import {AuthController} from "./auth.controller";

@Module({
    imports: [UsersModule,
        PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.register({
        secretOrPrivateKey: configService.getString('SECRET_KEY'),
        signoptions: (
            expiresIn: configService.getNumber('DEFAULT_EXPIRATION'),
            algorithm: configService.getString('AUTH_ALGORITHM'),
        ),
    }),
],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

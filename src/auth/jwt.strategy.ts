import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, StrategyOptions, Strategy } from 'passport-jwt'; // Import StrategyOptions and Strategy
import { JwtPayload } from './jwt-payload.interface'; // Your custom JWT payload interface
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        // Correctly typing the options
        const options: StrategyOptions = {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'yourSecretKey', // Secret for JWT verification
        };
        super(options as any); // Cast options to `any` to bypass the type error (for now)
    }

    async validate(payload: JwtPayload) {
        // Validation logic after decoding the JWT
        return { userId: payload.sub, email: payload.email };
    }
}

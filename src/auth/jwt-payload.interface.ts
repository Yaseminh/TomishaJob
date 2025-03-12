// src/auth/jwt-payload.interface.ts
export interface JwtPayload {
    email: string;
    sub: string;  // This could be the user's ID or any unique identifier
}

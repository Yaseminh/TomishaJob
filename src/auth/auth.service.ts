import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './dtos/schemas/user.schema';
import { CreateUserDto } from './dtos/create-user.dto';
import { LoginDto } from './dtos/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        private jwtService: JwtService,
    ) {}

    // Kullanıcı kaydı
    async register(createUserDto: CreateUserDto) {
        const { email, password } = createUserDto;

        // Şifreyi hash'leme
        const hashedPassword = await bcrypt.hash(password, 10);

        // Yeni kullanıcıyı veritabanına kaydetme
        const user = new this.userModel({ email, password: hashedPassword });
        await user.save();

        return { message: 'User registered successfully!' };
    }

    // Kullanıcı girişi
    async login(loginDto: LoginDto) {
        const { email, password } = loginDto;

        // Kullanıcıyı email ile bulma
        const user = await this.userModel.findOne({ email });

        if (!user) {
            throw new Error('Invalid credentials');
        }

        // Kullanıcının şifresini veritabanından alıp kontrol etme
        const hashedPassword = user.get('password'); // Burada user.password yerine user.get('password') kullanıyoruz

        // Kullanıcının email veritabanından alıp kontrol etme
        const userEmail = user.get('email'); // Farklı bir isim kullanalım
        const myID = user.get('_id'); // Farklı bir isim kullanalım

        // Şifreyi doğrulama
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);
        if (!isPasswordValid) {
            throw new Error('Invalid credentials');
        }

        // JWT Token oluşturma
        const payload = { email: userEmail, sub: myID };
        const token = this.jwtService.sign(payload);

        return { access_token: token };
    }
}

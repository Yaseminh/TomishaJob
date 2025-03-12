import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { JobModule } from './job/job.module';
import {Module} from "@nestjs/common";


@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost/nest'), // MongoDB bağlantısı
        AuthModule,
        JobModule,
    ],
})
export class AppModule {}

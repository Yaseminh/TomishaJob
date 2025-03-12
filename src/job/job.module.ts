// src/job/job.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JobService } from './job.service';
import { JobController } from './job.controller';
import { Job, JobSchema } from './schemas/job.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: Job.name, schema: JobSchema }])],
    providers: [JobService],
    controllers: [JobController],
})
export class JobModule {}

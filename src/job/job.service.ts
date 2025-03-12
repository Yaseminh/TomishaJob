// src/job/job.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job, JobDocument } from './schemas/job.schema';
import { CreateJobDto } from './dtos/create-job.dto';
import { UpdateJobDto } from './dtos/update-job.dto';

@Injectable()
export class JobService {
    constructor(@InjectModel(Job.name) private jobModel: Model<JobDocument>) {}

    async create(createJobDto: CreateJobDto): Promise<JobDocument> {
        const createdJob = new this.jobModel(createJobDto);
        return createdJob.save();
    }

    async findAll(): Promise<JobDocument[]> {
        return this.jobModel.find().exec();
    }

    async findOne(id: string): Promise<JobDocument | null> {
        return this.jobModel.findById(id).exec();
    }

    async update(id: string, updateJobDto: UpdateJobDto): Promise<JobDocument | null> {
        return this.jobModel.findByIdAndUpdate(id, updateJobDto, { new: true }).exec();
    }

    async remove(id: string): Promise<JobDocument | null> {
        return this.jobModel.findByIdAndDelete(id).exec();
    }
}

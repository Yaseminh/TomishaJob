import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JobService } from './job.service';
import { CreateJobDto } from './dtos/create-job.dto';
import { UpdateJobDto } from './dtos/update-job.dto';
import { Job } from './schemas/job.schema';

@Controller('jobs')
export class JobController {
    constructor(private readonly jobService: JobService) {}

    // 🔐 Only authenticated users can create jobs
    @Post()
    @UseGuards(AuthGuard('jwt'))
    create(@Body() createJobDto: CreateJobDto, @Request() req): Promise<Job> {
        const user = req.user; // Extract user info from JWT
        console.log(`User ${user.email} is creating a job`);
        return this.jobService.create(createJobDto);
    }

    // Anyone can view jobs (public endpoint)
    @Get()
    findAll(): Promise<Job[]> {
        return this.jobService.findAll();
    }

    // Anyone can view a single job (public endpoint)
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Job | null> {
        return this.jobService.findOne(id);
    }

    // 🔐 Only authenticated users can update jobs
    @Put(':id')
    @UseGuards(AuthGuard('jwt'))
    async update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto, @Request() req): Promise<Job | null> {
        const user = req.user;
        console.log(`User ${user.email} is updating job ${id}`);
        return this.jobService.update(id, updateJobDto);
    }

    // 🔐 Only authenticated users can delete jobs
    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    async remove(@Param('id') id: string, @Request() req): Promise<Job | null> {
        const user = req.user;
        console.log(`User ${user.email} is deleting job ${id}`);
        return this.jobService.remove(id);
    }
}
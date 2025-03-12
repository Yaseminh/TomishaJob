// src/job/schemas/job.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobDocument = Job & Document; // Job ve Document'i birleştiriyoruz

@Schema()
export class Job {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    company: string;

    @Prop()
    location: string;

    @Prop()
    salary: number;

    @Prop({ default: Date.now })
    createdAt: Date;
}

export const JobSchema = SchemaFactory.createForClass(Job);

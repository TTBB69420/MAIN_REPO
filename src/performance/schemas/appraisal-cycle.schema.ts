import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AppraisalCycleDocument = AppraisalCycle & Document;

@Schema({ timestamps: true })
export class AppraisalCycle {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Date, required: true })
  startDate: Date;

  @Prop({ type: Date, required: true })
  endDate: Date;

  @Prop({ type: Types.ObjectId, ref: 'AppraisalTemplate', required: true })
  templateId: Types.ObjectId;

  @Prop({ type: String, default: 'Active' })
  status: string; // Active, Archived

  @Prop({ type: [Types.ObjectId], ref: 'Department', default: [] })
  targetDepartmentIds: Types.ObjectId[];
}

export const AppraisalCycleSchema = SchemaFactory.createForClass(AppraisalCycle);


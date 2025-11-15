import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LeaveTypeDocument = LeaveType & Document;

@Schema({ timestamps: true })
export class LeaveType {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  code: string;

  @Prop({ type: Boolean, default: true })
  isDeductible: boolean;

  @Prop({ type: Number, default: 0 })
  maxCarryOverDays: number;

  @Prop({ type: String, required: false })
  payCode?: string; // Link to Payroll deduction/allowance code
}

export const LeaveTypeSchema = SchemaFactory.createForClass(LeaveType);


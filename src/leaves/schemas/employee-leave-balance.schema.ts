import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type EmployeeLeaveBalanceDocument = EmployeeLeaveBalance & Document;

@Schema({ timestamps: true })
export class EmployeeLeaveBalance {
  @Prop({ type: Types.ObjectId, ref: 'Employee', required: true })
  employeeId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'LeaveType', required: true })
  leaveTypeId: Types.ObjectId;

  @Prop({ type: Number, default: 0 })
  totalEntitled: number;

  @Prop({ type: Number, default: 0 })
  taken: number;

  @Prop({ type: Number, default: 0 })
  remaining: number;

  @Prop({ type: Number, default: 0 })
  carryOver: number;

  @Prop({ type: Date, required: true })
  resetDate: Date;
}

export const EmployeeLeaveBalanceSchema = SchemaFactory.createForClass(EmployeeLeaveBalance);


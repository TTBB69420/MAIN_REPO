import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type LeaveRequestDocument = LeaveRequest & Document;

const ApprovalStepSchema = new MongooseSchema({
  approverId: { type: Types.ObjectId, ref: 'Employee', required: true },
  role: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  date: { type: Date, default: null },
  comment: { type: String, default: null },
}, { _id: false, timestamps: false });

@Schema({ timestamps: true })
export class LeaveRequest {
  @Prop({ type: Types.ObjectId, ref: 'Employee', required: true })
  employeeId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'LeaveType', required: true })
  leaveTypeId: Types.ObjectId;

  @Prop({ type: Date, required: true })
  startDate: Date;

  @Prop({ type: Date, required: true })
  endDate: Date;

  @Prop({ type: Number, required: true })
  durationDays: number; // Net working days

  @Prop({ type: [ApprovalStepSchema], default: [] })
  approvalWorkflow: Array<{
    approverId: Types.ObjectId;
    role: string;
    status: string;
    date?: Date;
    comment?: string;
  }>;

  @Prop({ type: String, default: 'Pending' })
  finalStatus: string; // Pending, Approved, Rejected
}

export const LeaveRequestSchema = SchemaFactory.createForClass(LeaveRequest);


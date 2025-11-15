import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type AttendanceRecordDocument = AttendanceRecord & Document;

@Schema({ timestamps: true })
export class AttendanceRecord {
  @Prop({ type: Types.ObjectId, ref: 'Employee', required: true })
  employeeId: Types.ObjectId;

  @Prop({ type: Date, required: true })
  date: Date;

  @Prop({ type: Types.ObjectId, ref: 'Shift', required: true })
  shiftId: Types.ObjectId; // The assigned shift for that day

  @Prop({ type: Date, default: null })
  clockIn?: Date; // Timestamp

  @Prop({ type: Date, default: null })
  clockOut?: Date; // Timestamp

  @Prop({ type: Number, default: 0 })
  latenessMinutes: number;

  @Prop({ type: Number, default: 0 })
  overtimeHours: number;

  @Prop({ type: Types.ObjectId, ref: 'WorkflowRequest', default: null })
  correctionRequest?: Types.ObjectId; // Link to a workflowRequests document
}

export const AttendanceRecordSchema = SchemaFactory.createForClass(AttendanceRecord);


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type WorkflowRequestDocument = WorkflowRequest & Document;

const WorkflowStepSchema = new MongooseSchema({
  approverId: { type: Types.ObjectId, ref: 'Employee', required: true },
  status: { type: String, default: 'Pending' },
  date: { type: Date, default: null },
}, { _id: false, timestamps: false });

@Schema({ timestamps: true })
export class WorkflowRequest {
  @Prop({ required: true })
  type: string; // e.g., Profile Change, Org Change, Attendance Correction

  @Prop({ type: Types.ObjectId, ref: 'Employee', required: true })
  requesterId: Types.ObjectId;

  @Prop({ required: true })
  targetCollection: string; // e.g., 'employees'

  @Prop({ type: Types.ObjectId, required: true })
  targetDocumentId: Types.ObjectId;

  @Prop({ type: Object, required: true })
  proposedChanges: Record<string, any>; // JSON Object - The data to be updated

  @Prop({ type: [WorkflowStepSchema], default: [] })
  workflowSteps: Array<{
    approverId: Types.ObjectId;
    status: string;
    date?: Date;
  }>;

  @Prop({ type: String, default: 'Pending' })
  currentStatus: string; // Pending, Approved, Rejected, etc.
}

export const WorkflowRequestSchema = SchemaFactory.createForClass(WorkflowRequest);


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type PayrollRunDocument = PayrollRun & Document;

const PayrollApprovalSchema = new MongooseSchema({
  approverId: { type: Types.ObjectId, ref: 'Employee', required: true },
  role: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  date: { type: Date, default: null },
}, { _id: false, timestamps: false });

@Schema({ timestamps: true })
export class PayrollRun {
  @Prop({ type: Date, required: true })
  payPeriodStart: Date;

  @Prop({ type: Date, required: true })
  payPeriodEnd: Date;

  @Prop({ type: Date, required: true })
  runDate: Date;

  @Prop({ type: String, default: 'Draft' })
  status: string; // Draft, Under Review, Locked, Paid

  @Prop({ type: [PayrollApprovalSchema], default: [] })
  approvals: Array<{
    approverId: Types.ObjectId;
    role: string;
    status: string;
    date?: Date;
  }>;
}

export const PayrollRunSchema = SchemaFactory.createForClass(PayrollRun);


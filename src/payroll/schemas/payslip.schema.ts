import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type PayslipDocument = Payslip & Document;

const EarningsItemSchema = new MongooseSchema({
  type: { type: String, required: true },
  amount: { type: Number, required: true },
}, { _id: false, timestamps: false });

const DeductionsItemSchema = new MongooseSchema({
  type: { type: String, required: true },
  amount: { type: Number, required: true },
  sourceRef: { type: String, default: null },
}, { _id: false, timestamps: false });

@Schema({ timestamps: true })
export class Payslip {
  @Prop({ type: Types.ObjectId, ref: 'PayrollRun', required: true })
  payrollRunId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Employee', required: true })
  employeeId: Types.ObjectId;

  @Prop({ type: Number, required: true })
  netSalary: number;

  @Prop({ type: [EarningsItemSchema], default: [] })
  earnings: Array<{
    type: string;
    amount: number;
  }>;

  @Prop({ type: [DeductionsItemSchema], default: [] })
  deductions: Array<{
    type: string;
    amount: number;
    sourceRef?: string;
  }>;

  @Prop({ type: Boolean, default: false })
  isDisputed: boolean;
}

export const PayslipSchema = SchemaFactory.createForClass(Payslip);


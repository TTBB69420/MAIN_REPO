import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type PayGradeDocument = PayGrade & Document;

const AllowanceSchema = new MongooseSchema({
  name: { type: String, required: true },
  amount: { type: Number, required: true },
}, { _id: false, timestamps: false });

@Schema({ timestamps: true })
export class PayGrade {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Number, required: true })
  grossSalary: number;

  @Prop({ type: [AllowanceSchema], default: [] })
  allowances: Array<{
    name: string;
    amount: number;
  }>;
}

export const PayGradeSchema = SchemaFactory.createForClass(PayGrade);


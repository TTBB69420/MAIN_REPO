import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ShiftDocument = Shift & Document;

@Schema({ timestamps: true })
export class Shift {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  startTime: string; // HH:MM format

  @Prop({ required: true })
  endTime: string; // HH:MM format

  @Prop({ type: [Types.ObjectId], ref: 'Employee', default: [] })
  assignedEmployeeIds: Types.ObjectId[];
}

export const ShiftSchema = SchemaFactory.createForClass(Shift);


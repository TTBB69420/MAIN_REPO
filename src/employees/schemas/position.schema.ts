import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type PositionDocument = Position & Document;

@Schema({ timestamps: true })
export class Position {
  @Prop({ required: true })
  title: string;

  @Prop({ type: Types.ObjectId, ref: 'Department', required: true })
  departmentId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Position', required: false })
  reportingToPositionId?: Types.ObjectId; // Organizational hierarchy

  @Prop({ type: Types.ObjectId, ref: 'PayGrade', required: false })
  payGradeId?: Types.ObjectId;

  @Prop({ type: Date, default: null })
  deactivatedOn?: Date; // If status is Delimited

  @Prop({ type: String, default: 'Active' })
  status: string; // Active, Delimited
}

export const PositionSchema = SchemaFactory.createForClass(Position);


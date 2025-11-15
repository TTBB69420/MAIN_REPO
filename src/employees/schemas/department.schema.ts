import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type DepartmentDocument = Department & Document;

@Schema({ timestamps: true })
export class Department {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  code: string;

  @Prop({ type: Types.ObjectId, ref: 'Employee', required: false })
  headId?: Types.ObjectId; // The employee leading this department

  @Prop({ type: Types.ObjectId, ref: 'Department', required: false })
  parentDepartmentId?: Types.ObjectId; // For hierarchical structure
}

export const DepartmentSchema = SchemaFactory.createForClass(Department);


import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema({ timestamps: true })
export class PersonalDetails {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ type: Date, required: true })
  dob: Date;

  @Prop({ required: true, unique: true })
  nationalId: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  address: string;

  @Prop({ type: String, default: null })
  profilePictureUrl?: string;
}

@Schema({ timestamps: true })
export class EmploymentInfo {
  @Prop({ type: Date, required: true })
  hireDate: Date;

  @Prop({ required: true })
  contractType: string;

  @Prop({ type: String, default: 'Active' })
  status: string; // Active, Terminated, etc.
}

@Schema({ timestamps: true })
export class Employee {
  @Prop({ required: true, unique: true })
  employeeId: string; // e.g., 10001

  @Prop({ type: PersonalDetails, required: true })
  personalDetails: PersonalDetails;

  @Prop({ type: EmploymentInfo, required: true })
  employmentInfo: EmploymentInfo;

  @Prop({ type: Types.ObjectId, ref: 'Position', required: false })
  positionId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Department', required: false })
  departmentId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Employee', required: false })
  managerId?: Types.ObjectId; // Self-reference for reporting line

  @Prop({ type: Types.ObjectId, ref: 'PayGrade', required: false })
  payGradeId?: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: false, unique: true })
  userId?: Types.ObjectId;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);


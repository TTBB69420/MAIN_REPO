import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ type: Types.ObjectId, ref: 'Employee', required: false })
  employeeId?: Types.ObjectId;

  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({ type: [String], default: ['Employee'] })
  roles: string[];

  @Prop({ type: Date, default: null })
  lastLogin?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);


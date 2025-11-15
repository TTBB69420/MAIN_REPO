import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type SystemConfigDocument = SystemConfig & Document;

const LatenessRuleSchema = new MongooseSchema({
  gracePeriodMinutes: { type: Number, required: true },
  penaltyAmount: { type: Number, required: true },
}, { _id: false, timestamps: false });

const AccrualSettingSchema = new MongooseSchema({
  leaveType: { type: String, required: true },
  accrualRate: { type: Number, required: true },
  accrualFrequency: { type: String, required: true },
}, { _id: false, timestamps: false });

@Schema({ timestamps: true })
export class SystemConfig {
  @Prop({ type: String, default: 'global', unique: true })
  _id: string; // Singleton, e.g., 'global'

  @Prop({ type: [Date], default: [] })
  publicHolidays: Date[];

  @Prop({ type: LatenessRuleSchema, default: null })
  latenessRules?: {
    gracePeriodMinutes: number;
    penaltyAmount: number;
  };

  @Prop({ type: [AccrualSettingSchema], default: [] })
  accrualSettings: Array<{
    leaveType: string;
    accrualRate: number;
    accrualFrequency: string;
  }>;
}

export const SystemConfigSchema = SchemaFactory.createForClass(SystemConfig);


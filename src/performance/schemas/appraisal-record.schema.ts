import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type AppraisalRecordDocument = AppraisalRecord & Document;

const RatingSchema = new MongooseSchema({
  criteriaName: { type: String, required: true },
  score: { type: Number, required: true },
  comment: { type: String, default: null },
}, { _id: false, timestamps: false });

@Schema({ timestamps: true })
export class AppraisalRecord {
  @Prop({ type: Types.ObjectId, ref: 'AppraisalCycle', required: true })
  cycleId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Employee', required: true })
  employeeId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Employee', required: true })
  reviewerId: Types.ObjectId;

  @Prop({ type: [RatingSchema], default: [] })
  ratings: Array<{
    criteriaName: string;
    score: number;
    comment?: string;
  }>;

  @Prop({ type: Number, required: true })
  overallRating: number;

  @Prop({ type: String, default: 'None' })
  disputeStatus: string; // None, Submitted, Resolved
}

export const AppraisalRecordSchema = SchemaFactory.createForClass(AppraisalRecord);


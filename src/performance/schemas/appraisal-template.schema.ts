import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type AppraisalTemplateDocument = AppraisalTemplate & Document;

const RatingScaleItemSchema = new MongooseSchema({
  score: { type: Number, required: true },
  description: { type: String, required: true },
}, { _id: false, timestamps: false });

@Schema({ timestamps: true })
export class AppraisalTemplate {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [RatingScaleItemSchema], required: true })
  ratingScale: Array<{
    score: number;
    description: string;
  }>;

  @Prop({ type: [String], default: [] })
  criteria: string[];

  @Prop({ required: true })
  appraisalType: string;
}

export const AppraisalTemplateSchema = SchemaFactory.createForClass(AppraisalTemplate);


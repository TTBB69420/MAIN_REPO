import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppraisalTemplate, AppraisalTemplateSchema } from './schemas/appraisal-template.schema';
import { AppraisalCycle, AppraisalCycleSchema } from './schemas/appraisal-cycle.schema';
import { AppraisalRecord, AppraisalRecordSchema } from './schemas/appraisal-record.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AppraisalTemplate.name, schema: AppraisalTemplateSchema },
      { name: AppraisalCycle.name, schema: AppraisalCycleSchema },
      { name: AppraisalRecord.name, schema: AppraisalRecordSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class PerformanceModule {}


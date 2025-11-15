import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkflowRequest, WorkflowRequestSchema } from './schemas/workflow-request.schema';
import { SystemConfig, SystemConfigSchema } from './schemas/system-config.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WorkflowRequest.name, schema: WorkflowRequestSchema },
      { name: SystemConfig.name, schema: SystemConfigSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class WorkflowModule {}


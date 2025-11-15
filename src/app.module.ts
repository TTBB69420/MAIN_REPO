import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CoreModule } from './core/core.module';
import { EmployeesModule } from './employees/employees.module';
import { LeavesModule } from './leaves/leaves.module';
import { TimeManagementModule } from './time-management/time-management.module';
import { PayrollModule } from './payroll/payroll.module';
import { PerformanceModule } from './performance/performance.module';
import { WorkflowModule } from './workflow/workflow.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/hr-system'),
    CoreModule,
    EmployeesModule,
    LeavesModule,
    TimeManagementModule,
    PayrollModule,
    PerformanceModule,
    WorkflowModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

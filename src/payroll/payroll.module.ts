import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PayGrade, PayGradeSchema } from './schemas/pay-grade.schema';
import { PayrollRun, PayrollRunSchema } from './schemas/payroll-run.schema';
import { Payslip, PayslipSchema } from './schemas/payslip.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PayGrade.name, schema: PayGradeSchema },
      { name: PayrollRun.name, schema: PayrollRunSchema },
      { name: Payslip.name, schema: PayslipSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class PayrollModule {}


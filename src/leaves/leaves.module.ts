import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LeaveType, LeaveTypeSchema } from './schemas/leave-type.schema';
import { EmployeeLeaveBalance, EmployeeLeaveBalanceSchema } from './schemas/employee-leave-balance.schema';
import { LeaveRequest, LeaveRequestSchema } from './schemas/leave-request.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: LeaveType.name, schema: LeaveTypeSchema },
      { name: EmployeeLeaveBalance.name, schema: EmployeeLeaveBalanceSchema },
      { name: LeaveRequest.name, schema: LeaveRequestSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class LeavesModule {}


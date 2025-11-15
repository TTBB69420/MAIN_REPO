import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Shift, ShiftSchema } from './schemas/shift.schema';
import { AttendanceRecord, AttendanceRecordSchema } from './schemas/attendance-record.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Shift.name, schema: ShiftSchema },
      { name: AttendanceRecord.name, schema: AttendanceRecordSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class TimeManagementModule {}


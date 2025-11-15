import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './schemas/employee.schema';
import { Department, DepartmentSchema } from './schemas/department.schema';
import { Position, PositionSchema } from './schemas/position.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: Department.name, schema: DepartmentSchema },
      { name: Position.name, schema: PositionSchema },
    ]),
  ],
  exports: [MongooseModule],
})
export class EmployeesModule {}


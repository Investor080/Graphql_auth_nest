import { Module } from '@nestjs/common';
import { StudentResolver } from './student.resolver';

@Module({
  providers: [StudentResolver]
})
export class StudentModule {}

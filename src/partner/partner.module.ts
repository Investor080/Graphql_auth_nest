import { Module } from '@nestjs/common';
import { PartnerResolver } from './partner.resolver';

@Module({
  providers: [PartnerResolver]
})
export class PartnerModule {}

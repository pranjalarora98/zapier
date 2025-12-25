import { Module } from '@nestjs/common';
import { TriggerController } from './trigger.controller';
import { TriggerService } from './trigger.service';
import { PrismaService } from '../../../prisma/service';

@Module({
  imports: [],
  controllers: [TriggerController],
  providers: [TriggerService, PrismaService],
  exports: [TriggerService],
})
export class TriggerModule {}

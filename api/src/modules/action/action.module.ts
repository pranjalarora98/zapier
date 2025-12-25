import { Module } from '@nestjs/common';
import { ActionController } from './action.controller';
// import { TriggerService } from './trigger.service';
import { PrismaService } from '../../../prisma/service';

@Module({
  imports: [],
  controllers: [ActionController],
  providers: [PrismaService],
  exports: [],
})
export class ActionModule {}

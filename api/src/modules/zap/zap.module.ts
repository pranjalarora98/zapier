import { Module } from '@nestjs/common';
import { ZapController } from './zap.controller';
import { ZapService } from './zap.service';
import { PrismaService } from '../../../prisma/service';

@Module({
  imports: [],
  controllers: [ZapController],
  providers: [ZapService, PrismaService],
  exports: [ZapService],
})
export class ZapModule {}

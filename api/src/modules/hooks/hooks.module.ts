import { Module } from '@nestjs/common';
import { HooksController } from './hooks.controller';

@Module({
  imports: [],
  controllers: [HooksController],
})
export class HooksModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TriggerModule } from './modules/trigger/trigger.module';
import { AppService } from './app.service';
import { ActionModule } from './modules/action/action.module';
import { ZapModule } from './modules/zap/zap.module';
import { HooksModule } from './modules/hooks/hooks.module';

@Module({
  imports: [TriggerModule, ActionModule, ZapModule, HooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Post, Controller, Param, Body, Get } from '@nestjs/common';
import { TriggerService } from './trigger.service';
import { CreateTriggerEventDto } from './dto/create-trigger-event.dto';

@Controller('')
export class TriggerController {
  constructor(private readonly triggerService: TriggerService) {
    console.log('consy');
  }

  @Post('')
  async createTrigger(
    @Param('triggerId') triggerId: string,
    @Body() payload: CreateTriggerEventDto,
  ) {
    console.log('HTTP POST /triggers/:triggerId/events', {
      triggerId,
      payload,
    });
    await this.triggerService.createTrigger(triggerId, payload);
  }

  @Get('/trigger/available')
  getAvailableTriggers() {
    return [
      { id: 'trigger1', name: 'Trigger 1' },
      { id: 'trigger2', name: 'Trigger 2' },
    ];
  }

  @Post('/triggers/hooks/:zapId')
  async webhook(@Param('zapId') zapId: string, @Body() payload) {
    await this.triggerService.handleWebhook(zapId, payload);
  }
}

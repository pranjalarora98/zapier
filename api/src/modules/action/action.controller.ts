import { Post, Controller, Param, Body, Get } from '@nestjs/common';

@Controller('api/v1')
export class ActionController {
  @Get('/action/available')
  getAvailableActions() {
    return [
      { id: 'email', name: 'Action 1' },
      { id: 'send-sol', name: 'Actions 2' },
    ];
  }
}

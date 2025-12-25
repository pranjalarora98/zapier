import { Post, Controller, Param, Body, Get } from '@nestjs/common';
import { PrismaService } from 'prisma/service';

// import ZapDto from './dto/zap-dto';

@Controller('')
export class HooksController {
  prismaService: PrismaService;
  constructor() {
    console.log('hooks controller');
    this.prismaService = new PrismaService();
  }

  @Post('/hooks/catch/:id/:zapId')
  async catchHook(
    @Param('id') id: string,
    @Param('zapId') zapId: string,
    @Body() payload,
  ) {
    console.log('Payload received at Hooks controller:');
    await this.prismaService.zapRun.create({
      data: {
        zapId: zapId,
        status: 'pending',
      },
    });
    return { status: 'success' };
  }
}

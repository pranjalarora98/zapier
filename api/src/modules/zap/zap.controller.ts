import { Post, Controller, Param, Body, Get } from '@nestjs/common';
import { ZapService } from './zap.service';
import { PrismaService } from 'prisma/service';
import { config } from 'process';
import { connect } from 'http2';
// import ZapDto from './dto/zap-dto';

@Controller('api/v1')
export class ZapController {
  prismaService: PrismaService;
  constructor(private readonly zapService: ZapService) {
    this.zapService = zapService;
    this.prismaService = new PrismaService();
    console.log('hii');
  }

  @Post('/zap')
  async createZap(@Body() payload) {
    console.log('Payload received at controller:', payload);
    await this.prismaService.zap.create({
      data: {
        name: 'zap',
        actions: {
          create: payload.actions.map((action, index) => ({
            position: index + 1,
            config: action.actionMetadata,
            action: {
              connect: { id: action.availableActionId },
            },
          })),
        },
      },
    });
    // const { userId, triggerId, actions, name } = payload;
    // await this.zapService.createZap(userId, triggerId, actions, name);
  }

  @Get('/zap')
  async getZaps() {
    return await this.prismaService.zap.findMany({
      include: {
        actions: true,
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/service';
// import { CreateZapDto } from './dto/create-zap.dto';

@Injectable()
export class ZapService {
  constructor(private readonly prisma: PrismaService) {}

  async createZap(triggerId: string, dto) {
    // const { name, actions } = dto;
    // return this.prisma.$transaction(async (tx) => {
    //   const zap = await tx.zap.create({
    //     data: { name },
    //   });
    //   await tx.trigger.create({
    //     data: {
    //       id: triggerId,
    //       name: `${name} trigger`,
    //       zapId: zap.id,
    //     },
    //   });
    //   for (let i = 0; i < actions.length; i++) {
    //     const a = actions[i];
    //     await tx.zapAction.create({
    //       data: {
    //         zapId: zap.id,
    //         actionId: a.actionId,
    //         position: i,
    //       },
    //     });
    //   }
    //   return zap;
    // });
  }
}

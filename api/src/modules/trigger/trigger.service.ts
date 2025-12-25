import { Injectable } from '@nestjs/common';
import { CreateTriggerEventDto } from './dto/create-trigger-event.dto';
import { PrismaService } from '../../../prisma/service';

@Injectable()
export class TriggerService {
  constructor(private readonly prisma: PrismaService) {}

  async createTrigger(triggerId: string, payload: CreateTriggerEventDto) {
    // const { name, id } = payload;
    // const te = await this.prisma.trigger.create({
    //   data: {
    //     name,
    //     id,
    //     zapId: 'zap1',
    //   },
    // });
  }

  async handleWebhook(zapId: string, payload: any) {
    // await this.prisma.$transaction(async (tx) => {
    //   const createdZapRun = await tx.zapRun.create({ data: { zapId } });
    //   await tx.zapRunOutbox.create({
    //     data: { zapRunId: createdZapRun.id },
    //   });
    // });
    // return { success: true };
  }
}

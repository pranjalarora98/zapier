import PrismaClient from '@prisma/client';

const prismaClient = new PrismaClient();

async function main() {
  const rows = await prismaClient.zapRunOutbox.findMany({});

  if (rows?.length) {
    const ids = rows.map((row) => row.id);
    await prismaClient.zapRunOutbox.deleteMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
}

setInterval(() => main(), 5000);

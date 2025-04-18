import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  while (1) {
    //comments added
    const list = await prisma.zapRunOutbox.findMany({});
    console.log(list);
  }
}

main();

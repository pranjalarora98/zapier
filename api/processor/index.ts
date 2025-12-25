// import { PrismaClient } from '@prisma/client';

// const prismaClient = new PrismaClient();

// async function main() {
//   try {
//     const rows = await prismaClient.zapRunOutbox.findMany({
//       take: 10,
//       select: {
//         id: true,
//         zapRunId: true,
//       },
//     });

//     for (var i = 0; i < rows.length; i++) {
//       console.log(rows[i].zapRunId);
//     }

//     if (rows?.length) {
//       const idsToDelete = rows.map((item) => item.id);

//       const deletedRows = await prismaClient.zapRunOutbox.deleteMany({
//         where: {
//           id: {
//             in: idsToDelete,
//           },
//         },
//       });
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }

// setInterval(() => main(), 2000);

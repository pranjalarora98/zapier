import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.post('/hooks/zapier/:userId/:zapId',async (req:any,res:any)=>{
   const {zapId,userId} = req.params;
   const {data} = req.body;
   await prisma.$transaction(async(prisma)=>{
    await prisma.zapRun.create({data:data})
    await prisma.zapRunOutbox.create({data:data})
   })
   
})

app.listen(3000,()=>{
    console.log('running');
})
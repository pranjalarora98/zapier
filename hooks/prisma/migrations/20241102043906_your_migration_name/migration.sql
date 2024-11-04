-- CreateTable
CREATE TABLE "Zap" (
    "id" SERIAL NOT NULL,
    "triggerId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Trigger" (
    "id" SERIAL NOT NULL,
    "zapId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Action" (
    "id" SERIAL NOT NULL,
    "zapId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ZapRun" (
    "id" SERIAL NOT NULL,
    "metadata" JSONB NOT NULL
);

-- CreateTable
CREATE TABLE "ZapRunOutbox" (
    "id" SERIAL NOT NULL,
    "zapRunId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Zap_id_key" ON "Zap"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Zap_triggerId_key" ON "Zap"("triggerId");

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_id_key" ON "Trigger"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Trigger_zapId_key" ON "Trigger"("zapId");

-- CreateIndex
CREATE UNIQUE INDEX "Action_id_key" ON "Action"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ZapRun_id_key" ON "ZapRun"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ZapRunOutbox_id_key" ON "ZapRunOutbox"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ZapRunOutbox_zapRunId_key" ON "ZapRunOutbox"("zapRunId");

-- AddForeignKey
ALTER TABLE "Trigger" ADD CONSTRAINT "Trigger_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_zapId_fkey" FOREIGN KEY ("zapId") REFERENCES "Zap"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ZapRunOutbox" ADD CONSTRAINT "ZapRunOutbox_zapRunId_fkey" FOREIGN KEY ("zapRunId") REFERENCES "ZapRun"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

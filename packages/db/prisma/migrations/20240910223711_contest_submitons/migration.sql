-- CreateTable
CREATE TABLE "Contest" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Contest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submition" (
    "id" TEXT NOT NULL,
    "contestId" TEXT NOT NULL,
    "freelancerId" TEXT NOT NULL,
    "submitionUrl" TEXT NOT NULL,

    CONSTRAINT "Submition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Submition_contestId_freelancerId_key" ON "Submition"("contestId", "freelancerId");

-- AddForeignKey
ALTER TABLE "Submition" ADD CONSTRAINT "Submition_freelancerId_fkey" FOREIGN KEY ("freelancerId") REFERENCES "Freelancer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Submition" ADD CONSTRAINT "Submition_contestId_fkey" FOREIGN KEY ("contestId") REFERENCES "Contest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

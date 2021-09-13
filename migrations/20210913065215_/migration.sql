-- CreateTable
CREATE TABLE "Countdown" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "igniteAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Countdown_pkey" PRIMARY KEY ("id")
);

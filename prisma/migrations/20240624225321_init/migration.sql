-- CreateTable
CREATE TABLE "dananz_users" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneCode" TEXT NOT NULL,
    "phoneNum" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "dananz_users_pkey" PRIMARY KEY ("id")
);

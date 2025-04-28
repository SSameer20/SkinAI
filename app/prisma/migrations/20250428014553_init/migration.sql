-- CreateTable
CREATE TABLE "User" (
    "Id" SERIAL NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Test" (
    "Id" SERIAL NOT NULL,
    "UserId" INTEGER NOT NULL,

    CONSTRAINT "Test_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- AddForeignKey
ALTER TABLE "Test" ADD CONSTRAINT "Test_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

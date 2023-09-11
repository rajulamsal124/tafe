/*
  Warnings:

  - The primary key for the `adminuser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[id]` on the table `AdminUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `AdminUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `adminuser` DROP PRIMARY KEY,
    ADD COLUMN `createdAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `photo` VARCHAR(191) NULL DEFAULT 'default.png',
    ADD COLUMN `updatedAt` DATETIME(3) NULL,
    ADD COLUMN `verified` BOOLEAN NULL DEFAULT false,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `role` VARCHAR(191) NULL DEFAULT 'user',
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `AdminUser_id_key` ON `AdminUser`(`id`);

/*
  Warnings:

  - The primary key for the `adminuser` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `adminuser` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `adminuser` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `adminuser` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `adminuser` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `adminuser` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `adminuser` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropIndex
DROP INDEX `AdminUser_id_key` ON `adminuser`;

-- AlterTable
ALTER TABLE `adminuser` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `photo`,
    DROP COLUMN `role`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `verified`,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `name` VARCHAR(191) NULL,
    ADD PRIMARY KEY (`id`);

-- RedefineIndex
CREATE UNIQUE INDEX `adminUser_email_key` ON `adminUser`(`email`);
DROP INDEX `AdminUser_email_key` ON `adminuser`;

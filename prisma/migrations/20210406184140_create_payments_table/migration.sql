/*
  Warnings:

  - You are about to drop the column `event_type` on the `Payments` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Payments` DROP COLUMN `event_type`,
    ADD COLUMN     `eventType` ENUM('CREATED', 'UPDATED') NOT NULL DEFAULT 'CREATED';

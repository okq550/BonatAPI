-- AlterTable
ALTER TABLE `Payments` ADD COLUMN     `event_type` ENUM('CREATED', 'UPDATED') NOT NULL DEFAULT 'CREATED';

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createPayment(paymentJsonObject) {
  await prisma.Payment.create({
    data: {
      object: paymentJsonObject,
    },
  });
}

async function getAllPayments() {
  const allPayments = await prisma.Payment.findMany();
  return allPayments;
}

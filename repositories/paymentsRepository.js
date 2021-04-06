const { PrismaClient } = require("@prisma/client");

exports.createPayment = async function (eventType, payloadJson) {
  try {
    const prisma = new PrismaClient();
    const createdPayment = await prisma.payments.create({
      data: {
        eventType: eventType,
        payload: payloadJson,
      },
    });
    return createdPayment;
  } catch (e) {
    // Log Errors
    console.error(e);
    throw Error("Error while creating payment record");
  }
};

exports.getPayments = async function (page, limit) {
  const prisma = new PrismaClient();
  console.log(page);
  console.log(limit);
  const allPayments = await prisma.payments.findMany({
    skip: page,
    take: limit,
    orderBy: {
      createdAt: 'desc',
    },
  });
  return allPayments;
};

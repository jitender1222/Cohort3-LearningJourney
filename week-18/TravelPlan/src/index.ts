import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const user = await prisma.user.create({
  //     data: {
  //       username: "Jitender singh",
  //       name: "jeetu",
  //       password: 12345,
  //     },
  //     include: {
  //       Travel_Plan: true,
  //     },
  //   });

  //    await prisma.travel_Plan.create({
  //     data: {
  //       userId: 1,
  //       title: "Go to Goa",
  //       destinationCity: "Goa",
  //       destinationCountry: "India",
  //       budget: 20000,
  //     },
  //   });

  // await prisma.travel_Plan.update({
  //     where: {
  //       id: 1,
  //     },
  //     data: {
  //       title: "go to ladakh",
  //     },
  //   });

  const getAllUser = await prisma.travel_Plan.findMany();
  console.log(getAllUser);
}

main();

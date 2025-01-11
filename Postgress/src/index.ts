import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser() {
  await client.user.update({
    where: {
      id: 1,
    },
    data: {
      username: "jitender singh",
    },
  });
}

createUser();

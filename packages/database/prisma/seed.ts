import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      role: "admin",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "employee",
    },
  });

  console.log("Seeded users:", user1, user2);
}

main()
  .then(() => {
    console.log("Seeding completed!");
    prisma.$disconnect();
  })
  .catch((e) => {
    console.error("Error seeding database:", e);
    prisma.$disconnect();
    process.exit(1);
  });

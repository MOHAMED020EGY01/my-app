import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();
async function main() {
  await prisma.user.createMany({
    data: Array.from({ length: 25 }, () => {
      return {
        name: faker.internet.displayName(),
        email: faker.internet.email(),
        profile: faker.person.jobTitle(),
        userId: faker.string.uuid(),
      };
    }),
  });
}
main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default prisma;

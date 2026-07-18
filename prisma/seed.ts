import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  const passwordHash = await bcrypt.hash('AdminSecurePass2026!', 10);
  
  // Admin user
  const admin = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password_hash: passwordHash,
      role: 'ADMIN',
    },
  });
  console.log(`Created admin user: ${admin.username} (Password: AdminSecurePass2026!)`);

  // 12 Referees
  for (let i = 1; i <= 12; i++) {
    const refUsername = `referee${i}`;
    const refPassword = `RefPass${i}#2026`;
    const refHash = await bcrypt.hash(refPassword, 10);

    const referee = await prisma.user.upsert({
      where: { username: refUsername },
      update: {},
      create: {
        username: refUsername,
        password_hash: refHash,
        role: 'REFEREE',
      },
    });
    console.log(`Created referee user: ${referee.username} (Password: ${refPassword})`);
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

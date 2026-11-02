import 'dotenv/config';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.menuItem.deleteMany();
  await prisma.venue.deleteMany();

  const venue = await prisma.venue.create({
    data: {
      name: 'Demo Bar',
      menuItems: {
        create: [
          {
            name: 'Cerveza rubia',
            description: 'Pinta 500ml',
            priceCents: 4500_00, // $4500.00 en centavos
          },
          {
            name: 'Agua con gas',
            description: '500ml',
            priceCents: 1800_00,
          },
          {
            name: 'Hamburguesa clásica',
            description: 'Carne, lechuga, tomate, cheddar',
            priceCents: 8900_00,
          },
          {
            name: 'Papas fritas',
            description: 'Porción para compartir',
            priceCents: 5200_00,
          },
          {
            name: 'Café espresso',
            priceCents: 2500_00,
          },
        ],
      },
    },
    include: { menuItems: true },
  });

  console.log(`Seed OK — venue ${venue.id} con ${venue.menuItems.length} items`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

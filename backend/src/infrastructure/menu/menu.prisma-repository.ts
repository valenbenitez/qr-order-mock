import { Injectable } from '@nestjs/common';
import { MenuRepository } from '../../domain/menu/menu.repository.js';
import { PrismaService } from '../persistence/prisma.service.js';
import { MenuItem } from '../../domain/menu/menu-item.js';


@Injectable()
export class MenuPrismaRepository implements MenuRepository {
  constructor(private readonly prisma: PrismaService) {}

  findActiveByVenueId(venueId: string): Promise<MenuItem[]> {
    return this.prisma.menuItem.findMany({
      where: { venueId, active: true },
      orderBy: { name: 'asc' },
      select: {
        id: true,
        venueId: true,
        name: true,
        description: true,
        priceCents: true,
        active: true,
      },
    });
  }
}
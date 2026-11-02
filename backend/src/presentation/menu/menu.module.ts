import { Module } from '@nestjs/common';
import { GetMenuUseCase } from '../../application/menu/get-menu.use-case.js';
import { MENU_REPOSITORY } from '../../domain/menu/menu.repository.js';
import { MenuController } from './menu.controller.js';
import { MenuPrismaRepository } from '../../infrastructure/menu/menu.prisma-repository.js';

@Module({
  controllers: [MenuController],
  providers: [
    GetMenuUseCase,
    {
      provide: MENU_REPOSITORY,
      useClass: MenuPrismaRepository,
    },
  ],
})
export class MenuModule {}
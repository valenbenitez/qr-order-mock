import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './infrastructure/persistence/prisma.module.js';
import { MenuModule } from './presentation/menu/menu.module.js';

@Module({
  imports: [PrismaModule, MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Controller, Get, Param } from '@nestjs/common';
import { GetMenuUseCase } from '../../application/menu/get-menu.use-case.js';

@Controller('venues/:venueId/menu')
export class MenuController {
  constructor(private readonly getMenu: GetMenuUseCase) {}

  @Get()
  getVenueMenu(@Param('venueId') venueId: string) {
    return this.getMenu.execute(venueId);
  }
}
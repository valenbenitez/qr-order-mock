import { Inject, Injectable } from "@nestjs/common";
import { MENU_REPOSITORY, type MenuRepository } from "../../domain/menu/menu.repository.js";
import { MenuItem } from "../../domain/menu/menu-item.js";

@Injectable()
export class GetMenuUseCase {
  constructor(
    @Inject(MENU_REPOSITORY)
    private readonly menuRepository: MenuRepository,
  ) {}
  execute(venueId: string): Promise<MenuItem[]> {
    return this.menuRepository.findActiveByVenueId(venueId);
  }
}
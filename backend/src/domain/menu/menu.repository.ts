import { MenuItem } from "./menu-item.js";


export const MENU_REPOSITORY = Symbol('MENU_REPOSITORY');

export interface MenuRepository {
    findActiveByVenueId(venueId: string): Promise<MenuItem[]>;
}
export type MenuItem = {
    id: string;
    venueId: string;
    name: string;
    description: string | null;
    priceCents: number;
    active: boolean;
}
import { IBandMember } from "./band-member";

export interface IBand {
    name: string;
    establishedAt: Date,
    members: IBandMember[],
    genre: string, 
    country: string,
    topSongs: string[]
}
import { Instrument } from "./instrument.enum";

export interface IBandMember {
    name: string, 
    familiyname: string, 
    birthday: Date,
    bandmemberSince: Date, 
    instrument: Instrument
}
import { Seat } from './seat';

export class Hand {
    handNumber: number;
    handID: number;
    tournamentID: number;
    buyIn: number;
    tax: number;
    gameType: string;
    level: number;
    smallBig: string;
    localTime: string;
    tableID: string;
    tableMax: number;
    buttonSeat: number;
    seats: Seat[];
    
    postSB: number;
    postBB: number;

    
}
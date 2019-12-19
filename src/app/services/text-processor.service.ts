import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextProcessorService {

  rgxTranscript: RegExp = /Transcript for tournament #(\d+) requested by (\w+)/;
  rgxHandNumber: RegExp = /\*+[ #]*(\d+) *\*+/;
  rgxPSHand: RegExp = /PokerStars Hand #(?<handID>\d+): Tournament #(?<tounamentID>\d+), (?<buyin>\$[\d.]+)\+(?<tax>\$[\d.]+) USD (?<gameType>[\w' ]+)- Level (?<levelNumber>[IVXDCM]+) (?<smallBig>\(\d+\/\d+\)) - (?<localTime>\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2})/;
  rgxTable: RegExp = /Table '(?<tableID>[\d ]+)' (?<tableMax>[^ ]+) Seat #(?<buttonSeat>\d) is the button/;
  rgxSeats: RegExp = /Seat (?<seatID>\d+): (?<player>[\w ]+)\((?<chips>\d+) in chips\)/;
  rgxPostSB: RegExp = /(?<player>[\w ]+): posts small blind (?<chips>\d+)/;
  rgxPostBB: RegExp = /(?<player>[\w ]+): posts big blind (?<chips>\d+)/;
  rgxDealt: RegExp = /(?<=\*{3} HOLE CARDS \*{3}\s)Dealt to (?<player>[\w ]+) \[(?<card1>[0-9JQKA][hdcs]) (?<card2>[0-9TJQKA][hdcs])\]/;
  rgxPlayerNoAction: RegExp = /(?<player>[\w ]+) (has returned|has timed out|is sitting out|is disconnected)/;
  rgxPlayerAction: RegExp = /(?<player>[\w ]+): (?<action>checks|folds|bets|calls|raises to) *(?<chips>\d*)( and is all-in)?/;
  rgxFlop: RegExp = /\*{3} FLOP \*{3}\s\[(?<card1>[0-9JQKA][hdcs]) (?<card2>[0-9TJQKA][hdcs]) (?<card3>[0-9TJQKA][hdcs])\]/;
  rgxTurn: RegExp = /\*{3} TURN \*{3} \[[^\[]+\[(?<card4>[0-9JQKA][hdcs])\]/;
  rgxRiver: RegExp = /\*{3} RIVER \*{3} \[[^\[]+\[(?<card5>[0-9JQKA][hdcs])\]/;
  rgxShowDown: RegExp = /\*{3} SHOW DOWN \*{3}/;
  rgxPlayerShowDown: RegExp = /(?<player>[\w ]+): (shows \[(?<card1>[0-9JQKA][hdcs]) (?<card2>[0-9TJQKA][hdcs])\] \((?<result>[^\)]+)\)|mucks hand)/;
  rgxCollectPot: RegExp = /(?<player>[\w ]+) collected (?<totalPot>\d+) from pot/;
  rgxSummary: RegExp = /\*{3} SUMMARY \*{3}/;
  rgxSummaryTotal: RegExp = /Total pot (?<totalPot>\d+) \| Rake (?<rake>\d+)/;
  rgxSummaryBoard: RegExp = /Board \[([0-9JQKA][hdcs]) ([0-9JQKA][hdcs]) ([0-9JQKA][hdcs]) ([0-9JQKA][hdcs]) ([0-9JQKA][hdcs])\]/;
  rgxSummarySeat: RegExp = /Seat (\d+): (?<player>[\w ]+)(\((?<position>button|small blind|big blind)\) )?(folded([\w, ]+)|mucked \[([0-9JQKA][hdcs]) ([0-9JQKA][hdcs])\]|showed \[([0-9JQKA][hdcs]) ([0-9JQKA][hdcs])\] and won \((?<totalPot>\d+)\) with a([\w, ]+))/;

  constructor() { }

  process(text: string): Observable<Hand[]> {
    return new Observable((observer) => {
      // There is no need to check rgxTranscript due to hand not being part of a tournament
      let matchHandNumber = this.rgxHandNumber.exec(text);
      let matchPSHand = this.rgxPSHand.exec(text);
      let matchTable = this.rgxTable.exec(text);
      let matchSeats = this.rgxSeats.exec(text);
      let matchPostSB = this.rgxPostSB.exec(text);
      let matchPostBB = this.rgxPostBB.exec(text);
      let matchDealt = this.rgxDealt.exec(text);
      let matchPlayerNoAction = this.rgxPlayerNoAction.exec(text);
      let matchPlayerAction = this.rgxPlayerAction.exec(text);
      let matchFlop = this.rgxFlop.exec(text);
      let matchTurn = this.rgxTurn.exec(text);
      let matchRiver = this.rgxRiver.exec(text);
      let matchShowDown = this.rgxShowDown.exec(text);
      let matchPlayerShowDown = this.rgxPlayerShowDown.exec(text);
      let matchCollectPot = this.rgxCollectPot.exec(text);
      let matchSummary = this.rgxSummary.exec(text);
      let matchSummaryTotal = this.rgxSummaryTotal.exec(text);
      let matchSummaryBoard = this.rgxSummaryBoard.exec(text);
      let matchSummarySeat = this.rgxSummarySeat.exec(text);

      if (matchHandNumber.length === 0) {
        observer.error("Invalid PokerStars transcript - Missing 'HAND NUMBER' element.");
      }

      let hands = new Array<Hand>(matchHandNumber.length);
      
    });
  }
}

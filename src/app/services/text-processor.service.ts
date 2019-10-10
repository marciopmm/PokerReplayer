import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextProcessorService {

  rgxTranscript: RegExp = /Transcript for tournament #(\d+) requested by (\w+)/;
  rgxHandNumber: RegExp = /\*+[ #]*(\d+) *\*+/;
  rgxPSHand: RegExp = /PokerStars Hand #(?<handID>\d+): Tournament #(?<tounamentID>\d+), (?<buyin>\$[\d.]+)\+(?<tax>\$[\d.]+) USD (?<gameType>[\w' ]+)- Level (?<levelNumber>[IVXDCM]+) (?<smallBig>\(\d+\/\d+\)) - (?<localTime>\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}:\d{2})/;
  rgxTable: RegExp = /Table '(?<tableID>[\d ]+)' (?<tableMax>[^ ]+) Seat #(?<buttonSeat>\d) is the button/;
  
  Seat (?<seatID>\d+): (?<player>[\w ]+)\((?<chips>\d+) in chips\)
  
  (?<player>[\w ]+): posts small blind (?<chips>\d+)
  
  (?<player>[\w ]+): posts big blind (?<chips>\d+)
  
  (?<=\*{3} HOLE CARDS \*{3}\s)Dealt to (?<player>[\w ]+) \[(?<card1>[0-9JQKA][hdcs]) (?<card2>[0-9TJQKA][hdcs])\]
  
  (?<player>[\w ]+) (has returned|has timed out|is sitting out|is disconnected)
  (?<player>[\w ]+): (?<action>checks|folds|bets|calls|raises to) *(?<chips>\d*)( and is all-in)?
  
  \*{3} FLOP \*{3}\s\[(?<card1>[0-9JQKA][hdcs]) (?<card2>[0-9TJQKA][hdcs]) (?<card3>[0-9TJQKA][hdcs])\]
  
  \*{3} TURN \*{3} \[[^\[]+\[(?<card4>[0-9JQKA][hdcs])\]
  
  \*{3} RIVER \*{3} \[[^\[]+\[(?<card5>[0-9JQKA][hdcs])\]
  
  \*{3} SHOW DOWN \*{3}
  
  (?<player>[\w ]+): (shows \[(?<card1>[0-9JQKA][hdcs]) (?<card2>[0-9TJQKA][hdcs])\] \((?<result>[^\)]+)\)|mucks hand)
  
  (?<player>[\w ]+) collected (?<totalPot>\d+) from pot
  
  \*{3} SUMMARY \*{3}
  
  Total pot (?<totalPot>\d+) \| Rake (?<rake>\d+)
  
  Board \[([0-9JQKA][hdcs]) ([0-9JQKA][hdcs]) ([0-9JQKA][hdcs]) ([0-9JQKA][hdcs]) ([0-9JQKA][hdcs])\]
  
  Seat (\d+): (?<player>[\w ]+)(\((?<position>button|small blind|big blind)\) )?(folded([\w, ]+)|mucked \[([0-9JQKA][hdcs]) ([0-9JQKA][hdcs])\]|showed \[([0-9JQKA][hdcs]) ([0-9JQKA][hdcs])\] and won \((?<totalPot>\d+)\) with a([\w, ]+))

  constructor() { }

  process(text: string) {

  }
}

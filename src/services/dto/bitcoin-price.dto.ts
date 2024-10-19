export class BitcoinPriceDto {

  constructor(bid: number, ask: number, mid: number) {
    this.bid = bid;
    this.ask = ask;
    this.mid = mid;
  }

  bid: number;
  ask: number;
  mid: number;
}
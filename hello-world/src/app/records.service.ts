import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Adam Taylor", 'E234','at-abc.net']
  info2: string[] = ["John Doe", 'E235', 'at-abc1.net']

  getinfo1(): string[]{
    return this.info1
  }
  getinfo2(): string[]{
    return this.info2
  }
  constructor() { }
}

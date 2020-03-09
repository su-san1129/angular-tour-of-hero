import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes = [
      { id: 11, name: '麗日お茶子' },
      { id: 12, name: 'オールマイト' },
      { id: 13, name: '爆豪勝己' },
      { id: 14, name: '緑谷出久' },
      { id: 15, name: '轟焦凍' },
      { id: 16, name: '切島鋭児郎' },
      { id: 17, name: '飯田天哉' },
      { id: 18, name: '相澤消太' },
      { id: 19, name: '上鳴電気' },
      { id: 20, name: '心操人使' }
    ];
    return { heroes };
  }
  constructor() { }

  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

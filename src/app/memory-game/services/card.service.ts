import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  chickenCard: any = [
    {
      id: 1,
      src: 'aladin-pile',
      isHidden: false,
    },
    {
      id: 2,
      src: 'belo-pile',
      isHidden: false,
    },
    {
      id: 3,
      src: 'djepetao',
      isHidden: false,
    },
    {
      id: 4,
      src: 'duh-pile',
      isHidden: false,
    },
    {
      id: 5,
      src: 'dzin-pile',
      isHidden: false,
    },
    {
      id: 6,
      src: 'kraljica-pile',
      isHidden: false,
    },
    {
      id: 7,
      src: 'kralj-pile',
      isHidden: false,
    },
    {
      id: 8,
      src: 'ljubicasto-pile',
      isHidden: false,
    },
    {
      id: 9,
      src: 'luda-pile',
      isHidden: false,
    },
    {
      id: 10,
      src: 'mraz-pile',
      isHidden: false,
    },
    {
      id: 11,
      src: 'pile-u-cizmama',
      isHidden: false,
    },
    {
      id: 12,
      src: 'pilicajac-1',
      isHidden: false,
    },
    {
      id: 13,
      src: 'pinokoko',
      isHidden: false,
    },
    {
      id: 14,
      src: 'princ-pile',
      isHidden: false,
    },
    {
      id: 15,
      src: 'roze-pile',
      isHidden: false,
    },
    {
      id: 16,
      src: 'serif-pile',
      isHidden: false,
    },
    {
      id: 17,
      src: 'super-pile',
      isHidden: false,
    },
    {
      id: 18,
      src: 'vila-pile',
      isHidden: false,
    },
    {
      id: 19,
      src: 'zeleno-pile',
      isHidden: false,
    },
    {
      id: 20,
      src: 'zlo-pile',
      isHidden: false,
    },
  ];

  constructor() {}

  getChickenCards(): any {
    let data = this.shuffleArray(this.chickenCard);
    return [...data];
  }

  shuffleArray(array: any) {
    let shuffled = [...array, ...array]
      .map((value: any) => ({ value, sort: Math.random() }))
      .sort((a: any, b: any) => a.sort - b.sort)
      .map((value: any, index: any) => {
        return {
          ...value.value,
          index: index
        }
      });

    return shuffled;
  }
}

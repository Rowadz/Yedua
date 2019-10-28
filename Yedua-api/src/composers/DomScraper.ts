import { load } from 'cheerio';
import { NodeEmChart, Lvl } from '../models/';

export class DomScraper {
  private readonly $: CheerioStatic;

  constructor($: CheerioStatic) {
    this.$ = $;
  }

  public init(lvl: Lvl) {
    const mainParents = ['head', 'body'];
    return mainParents.map((name: string) => {
      return {
        name,
        value: this.childrenArr(name).length,
        children: this.getChildData(this.childrenArr(name), lvl)
      };
    });
  }

  private childrenArr(el: CheerioElement | string): CheerioElement[] {
    return this.$(el)
      .children()
      .toArray();
  }

  private getChildData(ce: CheerioElement[], lvl: Lvl = '1'): NodeEmChart[] {
    return ce.map((el: CheerioElement) => {
      const len: number = this.$(el).children().length;
      const nodeInfo: NodeEmChart = {
        name: this.$(el).prop('tagName'),
        value: len
      };
      switch (lvl) {
        case '1':
          if (len >= 5) {
            nodeInfo.children = [
              ...this.getChildData(this.childrenArr(el), lvl)
            ];
          }
          break;
        case '2':
          if (len >= 2) {
            nodeInfo.children = [
              ...this.getChildData(this.childrenArr(el), lvl)
            ];
          }
          break;
        case '∞':
          if (len >= 1) {
            nodeInfo.children = [
              ...this.getChildData(this.childrenArr(el), lvl)
            ];
          }
          break;
      }

      return nodeInfo;
    });
  }
}

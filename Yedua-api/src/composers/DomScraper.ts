import { load } from 'cheerio';
import { NodeEmChart } from '../models/';

export class DomScraper {
  private readonly $: CheerioStatic;

  constructor($: CheerioStatic) {
    this.$ = $;
  }

  public init() {
    const mainParents = ['head', 'body'];
    return mainParents.map((name: string) => {
      return {
        name,
        children: this.getChildData(this.childrenArr(name))
      };
    });
  }

  private childrenArr(el: CheerioElement | string): CheerioElement[] {
    return this.$(el)
      .children()
      .toArray();
  }

  private getChildData(ce: CheerioElement[]): NodeEmChart[] {
    return ce.map((el: CheerioElement) => {
      const len: number = this.$(el).children().length;
      const nodeInfo: NodeEmChart = {
        name: this.$(el).prop('tagName'),
        value: len
      };
      if (len >= 1) {
        nodeInfo.children = [...this.getChildData(this.childrenArr(el))];
      }
      return nodeInfo;
    });
  }
}

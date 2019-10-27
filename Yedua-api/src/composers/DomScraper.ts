import { load } from 'cheerio';

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

  private getChildData(
    ce: CheerioElement[]
  ): Array<{ name: string; value: number }> {
    return ce.map((el: CheerioElement) => ({
      name: this.$(el).prop('tagName'),
      value: this.$(el).children().length
    }));
  }
}

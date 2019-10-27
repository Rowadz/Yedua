// tslint:disable-next-line: interface-name
export interface NodeEmChart {
  name: string;
  value: number;
  children?: NodeEmChart[];
}

export type Lvl = '1' | '2' | '∞';

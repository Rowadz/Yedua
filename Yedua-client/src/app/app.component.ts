import { Component, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
import { MessengerService } from './services/messenger.service';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';
import dark from '@amcharts/amcharts4/themes/dark';
am4core.useTheme(dark);

@Component({
  selector: 'yedua-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  chart: am4charts.Chart;

  constructor(
    private readonly messenger: MessengerService,
    private readonly zone: NgZone
  ) {}

  test(): void {
    this.messenger.jeepData().subscribe({
      next: data => {
        const chart = am4core.create(
          'chartdiv',
          am4plugins_forceDirected.ForceDirectedTree
        );

        this.chart = chart;
        this.dataMapper(data);
      },
      error: console.error
    });
  }

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {});
  }

  ngOnDestroy(): void {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  private dataMapper(data): void {
    const networkSeries = (this.chart as any).series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );
    this.chart.data = [...data];
    networkSeries.dataFields.value = 'value';
    networkSeries.dataFields.name = 'name';
    networkSeries.dataFields.children = 'children';
    networkSeries.nodes.template.tooltipText = '{name}:{value}';
    networkSeries.nodes.template.fillOpacity = 1;
    networkSeries.manyBodyStrength = -20;
    networkSeries.links.template.strength = 0.8;
    networkSeries.minRadius = am4core.percent(2);

    networkSeries.nodes.template.label.text = '{name}';
    networkSeries.fontSize = 10;
  }
}

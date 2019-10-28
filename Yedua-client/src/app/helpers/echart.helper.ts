import { EChartOption } from 'echarts';
import { DeepPartial } from 'utility-types';

export const TREE_OPTION: DeepPartial<EChartOption> = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },

  legend: {
    top: '2%',
    left: '3%',
    orient: 'vertical',
    data: [
      {
        name: 'tree1',
        icon: 'rectangle'
      },
      {
        name: 'tree2',
        icon: 'rectangle'
      }
    ]
  },
  series: [
    {
      type: 'tree',
      name: 'tree1',
      data: [],
      // top: '1%',
      // left: '7%',
      // bottom: '1%',
      // right: '20%',
      top: '1%',
      left: '15%',
      bottom: '-7%',
      right: '7%',
      initialTreeDepth: -1, // expand all...
      symbolSize: 10,
      symbolBoundingData: 20,
      symbolPatternSize: 20,
      // symbol: 'roundRect',
      lineStyle: {
        width: 5,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowBlur: 10,
        opacity: 0.1
      },

      label: {
        normal: {
          // position: 'right',
          // verticalAlign: 'middle',
          // align: 'left',
          fontSize: 10
          // padding: 100,
          // color: '#fff'
        }
      },

      leaves: {
        label: {
          // normal: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left',
          fontSize: 10,
          padding: 100,
          color: '#fff'
          // } as any
        }
      },

      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750
    }
  ]
};

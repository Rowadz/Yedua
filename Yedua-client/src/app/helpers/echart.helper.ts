import { EChartOption } from 'echarts';
import { DeepPartial } from 'utility-types';

export const TREE_OPTION: DeepPartial<EChartOption> = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
    formatter: ({ data: { name, value } }: any) => `${name}: children: ${value}`
  },

  legend: {
    top: '2%',
    left: '3%',
    orient: 'vertical',
    data: [
      {
        name: 'tree1',
        icon: 'rectangle'
      }
    ]
  },
  series: [
    {
      type: 'tree',

      top: '1%',
      left: '7%',
      bottom: '1%',
      right: '20%',

      symbolSize: 10,

      lineStyle: {
        color: '#191F2B',
        opacity: 0.5,
        shadowBlur: 5,
        shadowColor: '#F2F2F2',
        curveness: 0.4
      },
      label: {
        normal: {
          position: 'left',
          verticalAlign: 'middle',
          align: 'right',
          fontSize: 20,
          color: '#F2F2F2'
        }
      },
      initialTreeDepth: -1,
      itemStyle: {
        borderColor: 'white'
      },
      leaves: {
        label: {
          // normal: {
          position: 'right',
          verticalAlign: 'middle',
          align: 'left',
          color: '#F2F2F2'
          // }
        }
      },

      expandAndCollapse: true,
      animationDuration: 550,
      animationDurationUpdate: 750
    }
  ]
};

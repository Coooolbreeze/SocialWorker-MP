// pages/health-assess/health-assess.js
import * as echarts from '../../ec-canvas/echarts';
import { HealthAssess } from './health-assess-model.js';
const healthAssessService = new HealthAssess();

let healthChart = null;
const chartBaseOption = {
  backgroundColor: "#ffffff",
  tooltip: {},
  xAxis: {
    show: false
  },
  yAxis: {
    show: false
  },
  radar: {
    splitNumber: 3,
    axisLine: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: ['#fff', '#ddd', '#f00']
      }
    },
    name: {
      textStyle: {
        color: '#333'
      }
    },
    splitArea: {
      show: false
    },
    indicator: []
  },
  series: [
    {
      name: 'health',
      type: 'radar',
      lineStyle: {
        width: 0
      },
      symbol: 'none',
      data: []
    }
  ]
};

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });

  canvas.setChart(chart);

  chart.setOption(chartBaseOption);

  healthChart = chart;

  return chart;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    healthChanged: true,
    percent: '',
    desc: '',
    ec: {
      onInit: initChart
    }
  },

  onRecordsTap:function(){
    wx.navigateTo({
      url: '../health-records/health-records',
    })
  },
  onSelectHealthLabel: function (event) {
    const t = event.currentTarget.dataset.type;
    if (t) {
      wx.navigateTo({
        url: '../health-label/health-label?t=' + t
      });
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  loadHealthData () {
    const self = this;

    healthAssessService.getStatus(res => {
      if (res.code === 200) {
        let chartIndicator = res.data.indicator;
        let healthValues = chartIndicator.map(item => {
          return item.value;
        });
        let opt = {
          radar: {
            indicator: chartIndicator
          },
          series: {
            data: [
              {
                value: [100, 100, 100, 100, 100],
                name: 'health-bg',
                areaStyle: {
                  color: '#f17901'
                }
              },
              {
                value: healthValues,
                name: 'health',
                areaStyle: {
                  color: '#ffffff',
                  opacity: .7
                }
              }
            ]
          }
        };
        let option = Object.assign({}, chartBaseOption, opt);
        if (healthChart) {
          healthChart.setOption(option);
        }

        self.setData({
          percent: res.data.total,
          desc: res.data.result,
          healthChanged: false
        });
      }
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (this.data.healthChanged) {
      this.loadHealthData();
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
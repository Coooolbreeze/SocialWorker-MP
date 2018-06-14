// pages/health-label/health-label.js
import { HealthLabel } from './health-label-model.js';
const healthLabelService = new HealthLabel();

let selectedLabelIds = null;
let healthType = '';

Page({
    /**
     * 页面的初始数据
     */
    data: {
        isMultiple: true,
        labels: []
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (option) {
        if (option.t) {
            const self = this;
            healthType = option.t;
            
            healthLabelService.getLabels(healthType, res => {
              if (res.code === 200) {
                healthLabelService.getSelectedLabels(healthType, res2 => {
                  if (res2.code === 200) {
                    self.processLabels(res.data, res2.data);
                  }
                });
              }
            });
        }
    },
    processLabels (all, selected) {
      let ids = [];
      for (let i = 0; i < selected.length; i++) {
        ids.push(selected[i].id);
      }

      for (let i = 0 ; i < all.length; i++) {
        if (ids.indexOf(all[i].id) >= 0) {
          all[i]['checked'] = true;
        }
      }

      this.setData({
        labels: all,
        isMultiple: healthType !== '2'
      });
    },
    labelChange (e) {
      const checked = e.detail.value;
      
      let tmp = this.data.labels.slice(0);

      if (typeof checked === 'string') {
        selectedLabelIds = [checked];

        for (let i = 0; i < tmp.length; i++) {
          tmp[i]['checked'] = checked === (tmp[i].id + '');
        }
      }
      else {
        selectedLabelIds = checked;

        for (let i = 0; i < tmp.length; i++) {
          tmp[i]['checked'] = checked.indexOf(tmp[i].id + '') >= 0;
        }
      }

      this.setData({
        labels: tmp
      });
    },
    onSave () {
      if (selectedLabelIds) {
        healthLabelService.saveLabels(healthType, selectedLabelIds, res => {
          if (res.code === 200) {
            const pages = getCurrentPages();
            const prevPage = pages[pages.length - 2];
            
            prevPage.setData({
              healthChanged: true
            });

            wx.navigateBack();
          }
          else {
            wx.showModal({
              title: '保存失败',
              content: '出错了，请稍后重试: ' + res.message,
              showCancel: false
            });
          }
        });
      }
    }
})
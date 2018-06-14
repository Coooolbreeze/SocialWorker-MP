import { Base } from '../../utils/base.js'

class HealthLabel extends Base {
  constructor() {
    super()
  }

  getLabels (labelType, callback) {
    let params = {
      url: '/assesses?type=' + labelType,
      success: res => callback && callback(res)
    };

    this.request(params);
  }

  getSelectedLabels (labelType, callback) {
    let params = {
      url: '/users/self/assesses?type=' + labelType,
      success: res => callback && callback(res)
    };

    this.request(params);
  }

  saveLabels(labelType, ids, callback) {
    let params = {
      url: '/users/self/assesses',
      method: 'PUT',
      data: {
        type: labelType,
        ids: ids
      },
      success: res => callback && callback(res)
    };

    this.request(params);
  }
}

export { HealthLabel }

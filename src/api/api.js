import wepy from 'wepy';

const BASE_URL = 'http://localhost:3001';

/**
 * @version 1.0.0
 * @description
 * 对于若干在多个模块使用的api，请根据api后的注释及path参数判断使用
 */
/**
 *
 * @param {obj} params - 请求参数，参考wx.request()
 * @param {string} path - api路径
 * @returns {obj} res
 */
const httpClient = (params, path, id) => {
  let url = '';
  if (id) {
    path = path.replace(/:id/, id);
  } else {
    path = path.replace(/:id/, '');
  }
  url = `${BASE_URL}${path}`;
  const { data, method } = params;
  return wepy.request({
    url,
    method: method || 'GET',
    data
  });
};

// login
export const LOGIN_URL = `${BASE_URL}v1/session`;
export const getAndUpdateMemberInfoApi = params => httpClient(params, '/user/self'); // get获取 put更新
export const getMinAppSettingApi = params => httpClient(params, '/minAppSettingApi'); // get获取 put更新

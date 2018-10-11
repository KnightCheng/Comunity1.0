const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params
  }
}
export default mutations

// 只能进行同步改值，异步改值或者ajax请求只能放在actions中

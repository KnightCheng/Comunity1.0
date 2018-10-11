// 用户状态管理
const state = {
  //
  userName: 'lison'
}
const getters = {
  firstLetter: (state) => state.userName.substr(-1, 1)
}
const mutations = {
  //
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
const actions = {
  // commit:用于提交action的对象 state：user模块的state对象 rootState：根模块的state对象 dispatche：调用actions方法
  updateUserName ({ commit, satate, rootState, dispatch }) {
    // rootState.appName
  }
}
// 导出用户状态
export default{
  namespaced: true,
  getters,
  state,
  mutations,
  actions
}

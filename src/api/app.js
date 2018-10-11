export const getAppName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    if (!err) {
      resolve({
        code: 200,
        info: {
          appName: 'publicAppName'
        }
      })
    } else reject(err)
  })
}
// 模拟接口请求

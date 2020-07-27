import axios from 'axios'

// 根据 REACT_APP_MODE 来切换接口跟路径
const baseURL = {
  dev: '/api',
  alpha: 'xxx',
  prod: 'xxx'
}[process.env.REACT_APP_MODE]

const instance = axios.create({
  baseURL
})

export default instance
